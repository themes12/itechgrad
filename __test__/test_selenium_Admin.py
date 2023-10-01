from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys 
import time
from datetime import datetime
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get("http://localhost:3000/api/auth/signin?callbackUrl=%2Fadmin")
#================================================================================================
#------Locate Page Admin------
try:
    url_login = driver.current_url
    assert url_login == "http://localhost:3000/api/auth/signin?callbackUrl=%2Fadmin"
    print("Success locate page administrator")
except:
    assert False,"Fail locate page page administrator"	

#-------------------------Login Admin with invalid password-------------------------
try:
    input_user_invalid= driver.find_element(By.XPATH, '//*[@id="input-username-for-credentials-provider"]').send_keys("invalid username")
    input_password_invalid= driver.find_element(By.XPATH, '//*[@id="input-password-for-credentials-provider"]').send_keys("invalid password")
    button_login_invalid = driver.find_element(By.XPATH, '/html/body/div/div/div/div/form/button')
    button_login_invalid.click()
    print("Success Login Administrator with invalid password")
except:
    assert False,"Fail Login Administrator with invalid password"

#-------------------------Login Admin Normal-------------------------
try:
    input_user_valid= driver.find_element(By.XPATH, '//*[@id="input-username-for-credentials-provider"]').send_keys("admin")
    input_password_valid= driver.find_element(By.XPATH, '//*[@id="input-password-for-credentials-provider"]').send_keys("1234567890")
    button_login_valid= driver.find_element(By.XPATH, '/html/body/div/div/div/div/form/button')
    button_login_valid.click()
    print("Success Login Administrator with valid password")
except:
    assert False,"Fail Login Administrator with valid password"

#-------------------------Locate page after login-------------------------
try:
    heading_choose = driver.find_element(By.XPATH, '/html/body/div/div/div/div/h1')
    assert heading_choose.text == "เลือกหน้าที่ต้องการแก้ไข"
    print("Success locate page after login")
except:
    assert False,"Failed to locate page after login"

#-------------------------choose master degree & locate course-management-------------------------
try:
    button_master = driver.find_element(By.XPATH, '/html/body/div/div/div/div/div/div[1]/a')
    button_master.click()
    #time.sleep(3)
    url_master = driver.current_url
    #assert url_master == "http://localhost:3000/admin/master-degree/course-management"
    print("Success choose master dregree & locate course-management")
except:
    assert False,"Failure to choose master dregree & locate course-management"

#-----------------------------add course master degree nomal-----------------------------------    
try:
    time.sleep(3)
    button_master_add = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, '/html/body/div/div/div/div/section/div[1]/a')))
    driver.execute_script("arguments[0].scrollIntoView();", button_master_add)
    button_master_add.click()
    time.sleep(3)
    input_master = driver.find_elements(By.CSS_SELECTOR, "input")
    input_data = ["204999", "TEST COURSE NORMAL", "ทดสอบ", "3", "1", "1", "1"]

    for i in range(7):
        try:
            # Check if the input field is visible and enabled before sending keys
            if input_master[i].is_displayed() and input_master[i].is_enabled():
                input_master[i].send_keys(input_data[i])
            else:
                print(f"Input field {i} is not interactable")
        except Exception as e:
            print(f"Error while interacting with input field {i}: {str(e)}")


    textarea_master = driver.find_elements(By.CSS_SELECTOR, "textarea")
    input_data_textarea = ["TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST ", "ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ ทดสอบ "]
    for i in range(2):
        try:
            # Check if the input field is visible and enabled before sending keys
            if textarea_master[i].is_displayed() and textarea_master[i].is_enabled():
                textarea_master[i].send_keys(input_data_textarea[i])
            else:
                print(f"Input TEXT field {i} is not interactable")
        except Exception as e:
            print(f"Error while interacting with input TEXT field {i}: {str(e)}")
    #add_if_course = driver.find_element(By.XPATH, '/html/body/div/div/div/div/section/div/form/button')    
    #add_if_course.click()

    
    button_master_add_course = driver.find_element(By.XPATH, '/html/body/div/div/div/div/section/div/form/div[5]/button')
    button_master_add_course.click()

    button_back_to_master_degree = driver.find_element(By.XPATH, '/html/body/div/div/div/nav/header/ul[1]/li[1]/a')
    button_back_to_master_degree.click()


    print("Success add course master degree nomal")
except:
    assert False,"Failure to add course master degree nomal"




'''#---------------back to choose --------------------------------
button_home_choose = driver.find_element(By.XPATH, '/html/body/div/div/div/nav/header/div/a') 
#-------------------------choose Phd-------------------------
try:
    button_Phd = driver.find_element(By.XPATH, '/html/body/div/div/div/div/div/div[2]/a')
    button_Phd.click()
    url_Phd = driver.current_url
    assert url_master == "http://localhost:3000/admin/phd/course-management"
    print("Success choose Phd")
    button_home_choose.click() 
except:
    assert False,"Failure to choose Phd" '''

#end the code with
time.sleep(3)
print(datetime.now())
driver.quit()