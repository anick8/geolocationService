import requests
import sys

URL = "http://localhost:8080/getAllFollows"
#"https://hashx-register-service.herokuapp.com/register"  #"http://localhost:8080/register"


UserUUID = '0a2a06449bf013ec17cf3ed8f7fc23c6cb81b1bef9f971e50e532fef2e67b0e2'
SessionUUID = 'd2f95915aeeba4a986c41f816a9e66e3fc38b49d7cf4dd8ba5d7bfbd5ba69a78'
SessionKey = '9a927b4ec2b8094e5e0c901805c55d282dcf3d43926c8ef6962bb5c3d38ea4c5'
ErsOrIng=0
#data = {"UserUUID":UserUUID,"SessionUUID":SessionUUID,"SessionKey":SessionKey,"Lat":'1.000000',"Long":'1.000000',"UserAgent":"UserAgent","IPAddress":"12.12.13.14"}
data = {"Following":"210b551be32131d55168984874d1bf3a8b34f5e3b3ad6c00bfb81e7893c6d483","Follower":"373da1a53f3f78c8be5dd3b9eead45b6c1a0520ef9d58dc7e4bb162cf3f89d94","ErsOrIng":ErsOrIng,"limit":"20","offset":"0"}

#UserUUID,SessionUUID,SessionKey,UserLocation,UserAgent,IPAddress


if len(sys.argv)==4:
	data = {"Username":sys.argv[1],"Email":sys.argv[2] ,"SaltedHash":sys.argv[3]}

r = requests.post(url = URL, data=data)

print(r.text)
