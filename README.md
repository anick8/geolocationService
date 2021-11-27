
# Hashx Service for Geolocation

Service to implement Wallet Operations.
Run using - npm install npm start (OR) node index.js

# Routes

## /getGeolocation	

Gets the Geolocation lat long values.

Request Body -
-req.body.GeolocationUUID: GeolocationUUID of the Geolocation

Response Body -
{Lat,Long,GeolocationUUID}
## /createGeolocation	

creates a Geolocation

Request Body -
-req.body.Lat : Latitude
-req.body.Long : Longitude

   
Response Body -
{GeolocationUUID,Lat,Long}

## /getorCreateGeolocation	

checks if a geolocation exists if not creates it.

Request Body -
-req.body.Lat : Latitude
-req.body.Long : Longitude
   
Response Body -
{GeolocationUUID,Lat,Long}


# Response Format

[err,data,msg]

-   err : Error message from SQL try block
-   data : Data returned by SQL query
-   msg : Custom message defined in API


