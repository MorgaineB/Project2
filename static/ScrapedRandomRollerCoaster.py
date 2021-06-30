#!/usr/bin/env python
# coding: utf-8

# # Web-Scraping for Random Roller Coaster 

# import tools needed

# In[1]:


import os
from bs4 import BeautifulSoup as bs
import requests
from splinter import Browser
from bs4 import BeautifulSoup
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd


# create path to browser

# In[2]:


executable_path = {'executable_path': ChromeDriverManager().install()}
browser = Browser('chrome', **executable_path, headless=False)


# create library to store data

# In[3]:


random_coaster = {}


# connection to URL

# In[4]:


url = "https://rcdb.com"
browser.visit(url)


# In[5]:


browser.find_by_xpath('//*[@id="rrc_text"]/p[1]/a').click()


# find needed text

# In[6]:


html = browser.html
soup = BeautifulSoup(html, 'html.parser')


# check to see if it worked

# In[7]:


soup.find_all('a')


# In[8]:


image_url = soup.find('a')['href']
featured_image_url = f'{url}{image_url}'
random_coaster['random_image'] = featured_image_url


# In[9]:


coaster_name = soup.find('h1', class_=False, id=False).text
park_name = soup.findAll('a')[1].text


# In[10]:


park_city = soup.findAll('a')[2].text
park_city2 = soup.findAll('a')[2]
park_state = park_city2.find_next_sibling("a").text
park_state2 = park_city2.find_next_sibling("a")
park_country = park_state2.find_next_sibling("a").text
park_country2 = park_state2.find_next_sibling("a")


# In[11]:


try:
    park_nation = park_country2.find_next_sibling("a").text
    print(f'{coaster_name} at {park_name} located in {park_city}, {park_state}, {park_country}, {park_nation}')
    random_coaster['random_name'] = coaster_name
    random_coaster['random_park'] = park_name
    random_coaster['random_city'] = park_state
    random_coaster['random_country'] = park_country
    random_coaster['random_nation'] = park_nation
except AttributeError:
    pass
    try:
        print(f'{coaster_name} at {park_name} located in {park_city}, {park_state}, {park_country}')
        random_coaster['random_name'] = coaster_name
        random_coaster['random_park'] = park_name
        random_coaster['random_city'] = park_state
        random_coaster['random_country'] = park_country
    except AttributeError:
        pass
        try:
            print(f'{coaster_name} at {park_name} located in {park_city}, {park_state}')
            random_coaster['random_name'] = coaster_name
            random_coaster['random_park'] = park_name
            random_coaster['random_city'] = park_state
        except AttributeError:
            pass


# In[12]:


random_coaster


# In[ ]:




