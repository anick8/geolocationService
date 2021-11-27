
var utils = require('../common/utils');
var GeolocationService = require('./GeolocationService');
module.exports = (app, console) => {
    
    app.post('/getGeolocation',async (req, res) => {
        console.log('hello')
        result  = await GeolocationService.getGeolocation(req);
        utils.handleresultdict(res,result)
       }
    )

    app.post('/createGeolocation',async (req, res) => {
        result  = await GeolocationService.createGeoLocation(req);
        utils.handleresultdict(res,result)
       }
    )

    app.post('/getorCreateGeolocation',async (req, res) => {
        result  = await GeolocationService.getorCreateGeolocation(req);
        utils.handleresultdict(res,result)
       }
    )
    
};
