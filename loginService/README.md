
# Hashx Identity CUD Microservice

Microservice to implement Identity Table Create Update and Delete operations.

Run using - 
npm install 
npm start 
(OR)
node index.js

# Routes

## /createIdentity

Creates a new Identity : 
Request Body - 
 - req.body.Username : Unique Username of identity
 - req.body.UserUUID : UUID of creating account from UserInfo
 - req.body.ProfileBio * : Bio for profile, plaintext 1000 characters
 -  req.body.ProfileImageURL * : ImageURL for profile image
 *Optional Arguments 
 
Query : 'Insert into "UserInfo" ("UserUUID","Email","CreatedAt","CreatedBy","ModifiedAt")'

## /updateIdentity

Updates  UserInfo with new details : 
Username,IdentityUUID,UserUUID,ProfileImageURL,ProfileBio
Request Body - 
 - req.body.Username : Unique Username of identity
 - req.body.IdentityUUID : IdentityUUID of identity 
 - req.body.UserUUID : UserUUID of identity
 - req.body.ProfileImageURL : Profile Image URL
 - req.body.ProfileBio : Bio of profile

 
Query : 'update "UserInfo" set "Email"= $1,"ModifiedAt"= $2  where "UserUUID"=$3' 

## /deleteIdentity

Deletes UserInfo row : 
Request Body - 
 - req.body.identityuuid : IdentityUUID of profile 
 
Query : delete from "Identity" where "IdentityUUID"= $1' 



# Response Format

[err,data,msg]

 - err : Error message from SQL try block
 - data : Data returned by SQL query
 - msg : Custom message defined in API






