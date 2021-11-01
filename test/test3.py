import requests
import sys

URL = "https://hashx-login-service.herokuapp.com/loginWithPassword"  #"http://localhost:8080/loginWithPassword" #"https://hashx-register-service.herokuapp.com/"#"http://localhost:8080/register"

data = {"Username":"aniketh","Email":"123","SaltedHash":"abc","Lat":'1.000000',"Long":'1.000000',"UserAgent":"UserAgent","IPAddress":"12.12.13.14"}
if len(sys.argv)==4:
	data = {"Username":sys.argv[1],"Email":sys.argv[2] ,"SaltedHash":sys.argv[3]}

r = requests.post(url = URL, data=data)

print(r.text)
