import requests
import sys

URL =  "https://hashx-register-service.herokuapp.com/"#"http://localhost:8080/register"

data = {"Username":"aniketh","Email":"aniketh@gmail.com","SaltedHash":"yolo"}
if len(sys.argv)==4:
	data = {"Username":sys.argv[1],"Email":sys.argv[2] ,"SaltedHash":sys.argv[3]}

r = requests.post(url = URL, data=data)

print(r.text)
