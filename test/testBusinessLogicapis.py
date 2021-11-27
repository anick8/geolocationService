#!/usr/bin/env python3
#1212
import os,sys,requests,json,time, pprint,csv
from requests.auth import HTTPBasicAuth

def readUser(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'Email':reqvar[0]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    

def checkUsername(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'Username':reqvar[0]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    

def checkEmail(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'Email':reqvar[0]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    

def register(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'Username':reqvar[0],
        'Email':reqvar[1],
        'SaltedHash':reqvar[2]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    

def readDeviceByParams(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'UserUUID':reqvar[0],
        'UserAgent':reqvar[1]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    

def createSession(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'UserUUID':reqvar[0],
        'GeolocationUUID':reqvar[1],
        'DeviceUUID':reqvar[2],
        'IPAddress':reqvar[3]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    

def loginPassword(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'Email':reqvar[0],
        'SaltedHash':reqvar[1],
        'Lat':reqvar[2],
        'Long':reqvar[3],
        'UserAgent':reqvar[4],
        'IPAddress':reqvar[5]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    
def isFollow(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'Follower':reqvar[0],
        'Following':reqvar[1]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    
def getAllFollows(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'Follower':reqvar[0],
        'limit':reqvar[1],
        'offset':reqvar[2],
        'ErsOrIng':reqvar[3]
    }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
    
def follow(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'Follower':reqvar[0],
        'Following':reqvar[1]
        }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
  
def unfollow(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'Follower':reqvar[0],
        'Following':reqvar[1]
        }
    print(reqjson)  
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())
  
def createWallet(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'IdentityUUID':reqvar[0],
        'WalletType':reqvar[1],
        'WalletName':reqvar[2]
    }
    print(reqjson)
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())

def deleteWallet(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'WalletUUID':reqvar[0],
            }
    print(reqjson)
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())

def getWallets(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'IdentityUUID':reqvar[0],
            }
    print(reqjson)
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())

def getWalletHistorybyWalletUUD(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'WalletUUID':reqvar[0],
            }
    print(reqjson)
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())

def getWalletHistorybyWalletUUDAB(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'FromWalletUUID':reqvar[0],
        'ToWalletUUID':reqvar[1]
            }
    print(reqjson)
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())

def transferTokens(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'Amount':reqvar[0],
        'FromWalletUUID':reqvar[1],
        'ToWalletUUID':reqvar[2],
        'ToWalletType':reqvar[3],
        'Note':reqvar[4],
        'ToUsername':reqvar[5],
        'TransactionStatus':reqvar[6],
        'TransactionType':reqvar[7]          
    }
    print(reqjson)
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())

def getGeolocation(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'GeolocationUUID':reqvar[0],
            }
    print(reqjson)
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())

def createGeolocation(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'Lat':reqvar[0],
        'Long':reqvar[1]
            }
    print(reqjson)
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())

def getorCreateGeolocation(root,reqvar):
    urlr = "http://localhost:8080/"+root
    print (urlr)
    headers = {'Content-type': 'application/json'}
    reqjson = {
        'Lat':reqvar[0],
        'Long':reqvar[1]
            }
    print(reqjson)
    r = requests.post(urlr, data=json.dumps(reqjson), headers=headers)# auth=HTTPBasicAuth('commandserver', 'cmdserv123')
    print (r.status_code)
    print (r.json())





if __name__ == '__main__':
    root=sys.argv[1]
    reqvar=[]
    for x in range(2,len(sys.argv)):
        reqvar.append(sys.argv[x])
    eval(root+"(root,reqvar)")
