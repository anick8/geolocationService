import requests
import sys

URL = "https://hashx-login-service.herokuapp.com/loginWithCookie"
#"https://hashx-register-service.herokuapp.com/register"  #"http://localhost:8080/register"


UserUUID = '0a2a06449bf013ec17cf3ed8f7fc23c6cb81b1bef9f971e50e532fef2e67b0e2'
SessionUUID = 'd2f95915aeeba4a986c41f816a9e66e3fc38b49d7cf4dd8ba5d7bfbd5ba69a78'
SessionKey = '9a927b4ec2b8094e5e0c901805c55d282dcf3d43926c8ef6962bb5c3d38ea4c5'
data = {"UserUUID":UserUUID,"SessionUUID":SessionUUID,"SessionKey":SessionKey,"Lat":'1.000000',"Long":'1.000000',"UserAgent":"UserAgent","IPAddress":"12.12.13.14"}

#UserUUID,SessionUUID,SessionKey,UserLocation,UserAgent,IPAddress


if len(sys.argv)==4:
	data = {"Username":sys.argv[1],"Email":sys.argv[2] ,"SaltedHash":sys.argv[3]}

r = requests.post(url = URL, data=data)

print(r.text)
