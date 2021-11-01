
var utils = require('../common/utils')
var registerService = require('./registerService');
module.exports = (app, console) => {
    
    app.post('/checkUsername',async (req, res) => {
        result  = await registerService.checkUsernameAvailable(req);
        console.log(result);
        utils.handleresultdict(res,result)
       }
    )

    app.post('/checkEmail',async (req, res) => {
        result  = await registerService.checkEmailAvailable(req);
        utils.handleresultdict(res,result)
        console.log(result);
        }
    )   

    app.post('/register',async (req, res) => {
        result  = await registerService.register(req)
        utils.handleresultdict(res,result)
        }
    )

    console.log("Installing TOKEN Routes")
};
