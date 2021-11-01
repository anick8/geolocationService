
var utils = require('../common/utils');
const { unfollow } = require('../lib/requestLibrary');
var followService = require('./followService');
module.exports = (app, console) => {
    
    app.post('/isFollow',async (req, res) => {
        result  = await followService.isFollow(req);
        utils.handleresultdict(res,result)
       }
    )

    app.post('/getAllFollows',async (req, res) => {
        result  = await followService.getAllFollows(req);
        utils.handleresultdict(res,result)
       }
    )

    app.post('/follow',async (req, res) => {
        result  = await followService.follow(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/unfollow',async (req, res) => {
        result  = await followService.unfollow(req);
        utils.handleresultdict(res,result)
       }
    )
    
};
