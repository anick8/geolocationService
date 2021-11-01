import requests
import sys

URL = "https://hashx-login-service.herokuapp.com/loginWithOauth"#"http://localhost:8080/loginWithOauth"
#"https://hashx-login-service.herokuapp.com/loginWithOauth"  #"http://localhost:8080/register"


Email = '15234'

IPAddress = '9a927b4ec2b8094e5e0c901805c55d282dcf3d43926c8ef6962bb5c3d38ea4c5'
UserAgent = 'UserAgent'
data = {"Email":Email,"Lat":'1.000000',"Long":'1.000000',"UserAgent":"UserAgent","IPAddress":"12.12.13.14"}

#UserUUID,SessionUUID,SessionKey,UserLocation,UserAgent,IPAddress


if len(sys.argv)==4:
	data = {"Username":sys.argv[1],"Email":sys.argv[2] ,"SaltedHash":sys.argv[3]}

r = requests.post(url = URL, data=data)

print(r.text)
