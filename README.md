
# Hashx Follow Service

Service to implement Follow operations.

Run using - 
npm install 
npm start 
(OR)
node index.js

# Routes

## /isFollow

Checks if A follows B

Request Body - 
 - req.body.Follower : IdentityUUID of Following ( A ) 
 - req.body.Following : IdentityUUID of Following ( B ) 

Response Body -
 - res.data = { isFollower , isFollowing }



## /getAllFollows

Checks all people that Follow A / A follows ( ErsOrIng )

Request Body - 
 - req.body.Follower : IdentityUUID of Follower ( A ) 
 - req.body.ErsOrIng : Followers (0) or Following (1)
 - req.body.limit : Limit number of results, default 20
 - req.body.offset : Offset for search, default 0

 Response Body -
 - res.data = {{ Follower,Following }} 


## /follow

Creates Follow row : 

Request Body - 
 - req.body.Follower : IdentityUUID of Following ( A ) 
 - req.body.Following : IdentityUUID of Following ( B ) 


Response Body -
 - res.data = { Follower,Following } 


## /unfollow

Deletes Follow row : 

Request Body - 
 - req.body.Follower : IdentityUUID of Following ( A ) 
 - req.body.Following : IdentityUUID of Following ( B ) 
 
Response Body -
 - res.data = { Follower,Following } 


# Response Format

[err,data,msg]

 - err : Error message from Service
 - data : Data returned by Service
 - msg : Custom message defined in API









