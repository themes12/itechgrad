from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import time
from datetime import datetime

driver = webdriver.Chrome()
driver.get("http://localhost:3000")

#================================================================================================
#------Page Academic Staff------
button_Staff = driver.find_element(By.XPATH, '//*[@id="react-aria-:R3b6mlkq:"]')
button_Staff.click()
button_Academic_Staff = driver.find_element(By.XPATH, '/html/body/div[2]/div/div[1]/ul/li[1]')
button_Academic_Staff.click()
time.sleep(2)
#================================================================================================
#------Locate Page Academic Staff------
try:
	heading_Academic_Staff= driver.find_elements(By.XPATH, "/html/body/div/div/div/div/div/section[2]/header/div")
	for h in heading_Academic_Staff:
		if h.text == "Academic Staff":
			assert h.text == "Academic Staff"
	print("Success locate page Academic Staff")
except :
	assert False,"Fail locate page Academic Staff"	
#------Check Academic Staff Display------
try:
	check_image_heading = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[1]/header/img").is_displayed()
	assert check_image_heading  is True

	div_staff = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[4]/div[1]/div/div/div").is_displayed()
	assert div_staff is True

	th_name = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[4]/div[1]/div/div/div/div/div[2]/div/div[1]/h6[1]")
	assert th_name.text == "ผู้ช่วยศาสตราจารย์ ดร.วิจักษณ์ ศรีสัจจะเลิศวาจา"

	en_name = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[4]/div[1]/div/div/div/div/div[2]/div/div[1]/h6[2]")
	assert en_name.text == "Assistant Professor Dr.Wijak Srisujjalertwaja"

	role = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[4]/div[1]/div/div/div/div/div[2]/div/div[2]/p[1]")
	assert role.text == "รักษาการแทนหัวหน้าภาควิชาวิทยาการคอมพิวเตอร์"
	role2 = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[4]/div[1]/div/div/div/div/div[2]/div/div[2]/p[2]")
	assert role2.text == "ผู้ช่วยคณบดีฝ่ายเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์"

	Research = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[4]/div[1]/div/div/div/div/div[2]/div/div[3]/div[1]/span")
	assert Research.text == "Recommender System"
	Research2 = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[4]/div[1]/div/div/div/div/div[2]/div/div[3]/div[2]/span")
	assert Research2.text == "Security management"
	Research3 = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[4]/div[1]/div/div/div/div/div[2]/div/div[3]/div[3]/span")
	assert Research3.text == "Webservice"
	Research4 = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[4]/div[1]/div/div/div/div/div[2]/div/div[3]/div[4]/span")
	assert Research4.text == "Ontology and semantic"

	phone = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[4]/div[1]/div/div/div/div/div[2]/div/div[4]/div[1]/div[2]")
	assert phone.text == "053-943412 ต่อ 124"

	email = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[4]/div[1]/div/div/div/div/div[2]/div/div[4]/div[2]/div[2]")
	assert email.text == "wijak.cscmu@gmail.com"

	button_per_web = driver.find_element(By.XPATH, "/html/body/div/div/div/div/div/section[4]/div[1]/div/div/div/div/div[2]/div/div[5]/button")
	button_per_web.click()

	
except :
	assert False,"Fail locate page Academic Staff"	

#end the code with
print(datetime.now())
driver.quit()