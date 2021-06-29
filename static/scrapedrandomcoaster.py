import os
from bs4 import BeautifulSoup as bs
import requests
from splinter import Browser
from bs4 import BeautifulSoup
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd


executable_path = {'executable_path': ChromeDriverManager().install()}
browser = Browser('chrome', **executable_path, headless=False)


random_coaster = {}


url = "https://rcdb.com"
browser.visit(url)


browser.find_by_xpath('//*[@id="rrc_text"]/p[1]/a').click()


html = browser.html
soup = BeautifulSoup(html, 'html.parser')


soup.find_all('a')


image_url = soup.find('a')['href']
featured_image_url = f'{url}{image_url}'
featured_image_url


coaster_name = soup.find('h1', class_=False, id=False).text
park_name = soup.findAll('a')[1].text


park_city = soup.findAll('a')[2].text
park_city2 = soup.findAll('a')[2]
park_state = park_city2.find_next_sibling("a").text
park_state2 = park_city2.find_next_sibling("a")
park_country = park_state2.find_next_sibling("a").text
park_country2 = park_state2.find_next_sibling("a")


try:
    park_nation = park_country2.find_next_sibling("a").text
    print(f'{coaster_name} at {park_name} located in {park_city}, {park_state}, {park_country}, {park_nation}')
except AttributeError:
    pass
    try:
        print(f'{coaster_name} at {park_name} located in {park_city}, {park_state}, {park_country}')
    except AttributeError:
        pass
        try:
            print(f'{coaster_name} at {park_name} located in {park_city}, {park_state}')
        except AttributeError:
            pass
