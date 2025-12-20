import requests
from bs4 import BeautifulSoup
import argparse

SEARCH_URL = "https://reg.ntuh.gov.tw/pharmacyoutside/QueryDrug.aspx"

def debug_drug(drug_name):
    s = requests.Session()
    s.headers.update({
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Origin": "https://reg.ntuh.gov.tw",
        "Referer": "https://reg.ntuh.gov.tw/pharmacyoutside/QueryDrug.aspx",
        "Content-Type": "application/x-www-form-urlencoded",
    })

    try:
        # Init
        r = s.get(SEARCH_URL, timeout=10)
        soup = BeautifulSoup(r.text, 'html.parser')
        viewstate = soup.find(id="__VIEWSTATE")['value']
        viewstate_gen = soup.find(id="__VIEWSTATEGENERATOR")['value']
        event_validation = soup.find(id="__EVENTVALIDATION")['value']
        
        # Search
        payload = {
            '__EVENTTARGET': '',
            '__EVENTARGUMENT': '',
            '__LASTFOCUS': '',
            '__VIEWSTATE': viewstate,
            '__VIEWSTATEGENERATOR': viewstate_gen,
            '__EVENTVALIDATION': event_validation,
            'DrugInfoQueryBox$txbDrugName': drug_name,
            'DrugInfoQueryBox$btnQueryByDrugName': '查詢',
            'DrugInfoQueryBox$txbIndication': '',
            'DrugInfoQueryBox$ddlPregnancyFactor': 'A'
        }
        
        post_r = s.post(SEARCH_URL, data=payload, timeout=20)
        search_soup = BeautifulSoup(post_r.text, 'html.parser')
        grid = search_soup.find(id="DrugListBox_grvDrugList")
        
        if not grid:
            print(f"No grid found for {drug_name}")
            return

        print(f"Grid found for {drug_name}. Rows:")
        rows = grid.find_all("tr")
        for row in rows:
            # Print text and links
            print("--- ROW ---")
            print(row.get_text(strip=True))
            links = row.find_all('a')
            for link in links:
                print(f"  Link: {link.get_text()} -> {link.get('href')}")
                
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("drug", help="Drug name to search")
    args = parser.parse_args()
    debug_drug(args.drug)
