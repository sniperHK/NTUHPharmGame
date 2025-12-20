import requests
from bs4 import BeautifulSoup
import os
import time

# Create directories
BASE_DIR = "Reference/DrugData"
IMG_DIR = os.path.join(BASE_DIR, "Images")
os.makedirs(IMG_DIR, exist_ok=True)

# Read drug list
with open("drug_list.txt", "r") as f:
    drug_list = [line.strip() for line in f if line.strip()]

SEARCH_URL = "https://reg.ntuh.gov.tw/pharmacyoutside/QueryDrug.aspx"
DETAIL_URL = "https://reg.ntuh.gov.tw/pharmacyoutside/QueryDrugDetail.aspx"

# Setup session
s = requests.Session()

# Detected Headers from Browser
s.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
    "Origin": "https://reg.ntuh.gov.tw",
    "Referer": "https://reg.ntuh.gov.tw/pharmacyoutside/QueryDrug.aspx",
    "Content-Type": "application/x-www-form-urlencoded",
})

# Detected Cookies
s.cookies.update({
    "TBMCookie_11657396280019457041": "258872001766201613Uebx3Gx260KGLl/ph2+afqeamgw="
})

# Initial GET to get ViewState
try:
    print("Initializing session...")
    r = s.get(SEARCH_URL, timeout=10)
    soup = BeautifulSoup(r.text, 'html.parser')
    viewstate = soup.find(id="__VIEWSTATE")['value']
    viewstate_gen = soup.find(id="__VIEWSTATEGENERATOR")['value']
    event_validation = soup.find(id="__EVENTVALIDATION")['value']
    print("Session initialized. ViewState found.")
except Exception as e:
    print(f"Failed to init session: {e}")
    exit()

# Read existing CSV to verify what's done
existing_codes = set()
csv_file = os.path.join(BASE_DIR, "drug_data.csv")

if os.path.exists(csv_file):
    with open(csv_file, "r", encoding="utf-8-sig") as f:
        for line in f:
            parts = line.strip().split(',')
            if len(parts) > 1 and parts[0] != "OriginalName":
                existing_codes.add(parts[0]) # Store OriginalName

# Open CSV in append mode
# Use line buffering
csv_f = open(csv_file, "a", encoding="utf-8-sig", buffering=1)
if os.stat(csv_file).st_size == 0:
    csv_f.write("OriginalName,DrugCode,ChineseName,ImageFile\n")

print(f"Found {len(drug_list)} drugs. {len(existing_codes)} already processed. Starting scrape...")

for idx, drug_name in enumerate(drug_list):
    if drug_name in existing_codes:
        print(f"[{idx+1}/{len(drug_list)}] Skipping {drug_name} (Already in CSV)")
        continue

    search_term = drug_name.split()[0] # Search by first word
    print(f"[{idx+1}/{len(drug_list)}] Searching for: {search_term} ({drug_name})")
    
    # Payload Construction
    payload = {
        '__EVENTTARGET': '',
        '__EVENTARGUMENT': '',
        '__LASTFOCUS': '',
        '__VIEWSTATE': viewstate,
        '__VIEWSTATEGENERATOR': viewstate_gen,
        '__EVENTVALIDATION': event_validation,
        'DrugInfoQueryBox$txbDrugName': search_term,
        'DrugInfoQueryBox$btnQueryByDrugName': '查詢',
        'DrugInfoQueryBox$txbIndication': '',
        'DrugInfoQueryBox$ddlPregnancyFactor': 'A'
    }

    try:
        # Refresh ViewState periodically or for safety
        try:
            r_fresh = s.get(SEARCH_URL, timeout=10)
            soup_fresh = BeautifulSoup(r_fresh.text, 'html.parser')
            val = soup_fresh.find(id="__VIEWSTATE")
            if val: payload['__VIEWSTATE'] = val['value']
            val = soup_fresh.find(id="__EVENTVALIDATION")
            if val: payload['__EVENTVALIDATION'] = val['value']
        except Exception:
            pass 

        # Perform search
        post_r = s.post(SEARCH_URL, data=payload, timeout=20)
        search_soup = BeautifulSoup(post_r.text, 'html.parser')
        
        # Look for result list rows (GridView)
        grid = search_soup.find(id="DrugListBox_grvDrugList")
        if not grid:
            print(f"  No results found for {search_term}")
            continue
            
        found_code = None
        
        # Strategy: Prefer "Instructions" (LIX4EA53.pdf) over "EducationPapers"
        instr_link = grid.find("a", href=lambda href: href and "Instructions" in href)
        if instr_link:
            basename = os.path.basename(instr_link['href'])
            found_code = os.path.splitext(basename)[0]
        else:
            edu_link = grid.find("a", href=lambda href: href and "EducationPapers" in href)
            if edu_link:
                basename = os.path.basename(edu_link['href'])
                found_code = os.path.splitext(basename)[0]
            
        if not found_code:
            print(f"  Could not extract code from links for {search_term}")
            continue

        print(f"  Found Code: {found_code}")
        
        # Get detail page
        detail_r = s.get(f"{DETAIL_URL}?Drug_Code={found_code}", timeout=20)
        detail_soup = BeautifulSoup(detail_r.text, 'html.parser')
        
        # Extract Info
        chinese_name_el = detail_soup.find(id="DrugInfoDetailBox_dtvDrugInfo_lblDrugChinName")
        chinese_name = chinese_name_el.text.strip() if chinese_name_el else "Unknown"
        
        # Look for image
        img_filename = ""
        img_candidates = []
        image_links = detail_soup.select("table#DrugInfoDetailBox_dtvDrugInfo a")
        
        for link in image_links:
            href = link.get('href', '')
            if "DrugImage" in href and ".jpg" in href.lower():
                img_candidates.append(href)
        
        target_img_url = None
        for url in img_candidates:
            if url.lower().endswith("a.jpg"):
                target_img_url = url
                break
        if not target_img_url and img_candidates:
            target_img_url = img_candidates[0]
            
        if target_img_url:
            if not target_img_url.startswith("http"):
                 if target_img_url.startswith("/"):
                     target_img_url = f"https://reg.ntuh.gov.tw{target_img_url}"
                 else:
                     target_img_url = f"https://reg.ntuh.gov.tw/pharmacyoutside/{target_img_url}"
            
            img_filename = f"{found_code}.jpg"
            img_path = os.path.join(IMG_DIR, img_filename)
            
            if not os.path.exists(img_path):
                try:
                    img_data = requests.get(target_img_url, headers=s.headers, timeout=20).content
                    with open(img_path, "wb") as img_f:
                        img_f.write(img_data)
                    print(f"  Downloaded image: {img_filename}")
                except Exception as e:
                    print(f"  Failed to download image {target_img_url}: {e}")
            else:
                print(f"  Image already exists: {img_filename}")
        else:
             print(f"  No image found for {found_code}")

        # Save data IMMEDIATELY
        line = f"{drug_name},{found_code},{chinese_name},{img_filename}\n"
        csv_f.write(line)
        csv_f.flush()
            
    except Exception as e:
        print(f"  Error processing {drug_name}: {e}")
    
    # Be nice
    time.sleep(1.0)

csv_f.close()
print("Done.")
