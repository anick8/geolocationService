const requestLibrary = require('./requestLibrary')

exports.checkGeolocation = async (body) => {
  try{
      var data  = {'Lat':body.Lat,'Long':body.Long};
      result = checkResultValid(await requestLibrary.readGeolocationByLatLong(data),1)
      return {'err':null,'data':result.data?result.data:0,'msg' : 'Check Geolocation Successful & '+result.msg}
  }
  catch(err){
      return{'err':err,'data':null,msg:'Error checking the Geolocation'}
  }
}

exports.checkDevice = async (body) => {
  try{
      var data  = {'UserUUID':body.UserUUID,'UserAgent':body.UserAgent};
      result = checkResultValid(await requestLibrary.readDeviceByParams(data),2)
      return {'err':null,'data':result.data?result.data:0,'msg' : 'Check Device Successful & '+result.msg}
  }
  catch(err){
      return{'err':err,'data':null,msg:'Error checking the Device'}
  }
}


exports.checkSession  = async (body) => {
  try{
      var data  = {'UserUUID':body.UserUUID,'DeviceUUID':body.DeviceUUID,'SessionUUID':body.SessionUUID};
      result = checkResultValid(await requestLibrary.readSession(data),3)
      return {'err':null,'data':result.data?result.data:0,'msg' : 'Check Session Successful & '+result.msg}
  }
  catch(err){
      return{'err':err,'data':null,msg:'Error checking the Session'}
  }
}

exports.checkUser  = async (body) => {
  try{
      var data  = {'Email':body.Email};
      result = checkResultValid(await requestLibrary.readUser(data),4)
      return {'err':null,'data':result.data?result.data:0,'msg' : 'Check User Successful & '+result.msg}
  }
  catch(err){
      return{'err':err,'data':null,msg:'Error checking the User'}
  }
}

  
  //Process the result of checkGeolocation / checkDevice / checkSession
  checkResultValid = (result,flag) => 
  {
      if(result.data)
          return {'err': null,'data':result.data,'msg':(flag==1?"Geolocation":flag==2?"Device":flag==3?"Session":"User") + (result.data? "":" Not") +( " Retrieved") }
      else
        return {'err':result.err,'data':null,'msg':'Check DB Failed at API '+result.msg}
  }
  
  //Check for errors in create statements for User, Identity and Password
  exports.checkError = (result,flag) =>
  {
    fC = flag==1?"Geolocation ":flag==2?"Device":"Session"
    if(!result.err)
      return {'err': null,'data': result.data,'msg': fC+' creation Successful'}
    else  
      return {'err': result.err,'data': null,'msg': fC+' creation Failed'}
  }

  exports.checkUpdate = (result,flag) =>
  {
    fC = flag==1?"Session":"Device";
    if(!result.err)
      return {'err': null,'data': result.data,'msg': fC+' update Successful'}
    else  
      return {'err': result.err,'data': null,'msg': fC+' update Failed'}
  }
  

  exports.matchPassword = async (body) => {
    try{
        var data  = {'UserUUID':body.UserUUID,'SaltedHash':body.SaltedHash};
        result = await requestLibrary.matchPassword(data)
        if(result.data)
          return {'err':null,'data':result.data.PasswordMatch?1:0,'msg' : 'Passwordcheck Successful & '+result.msg}
        else
          return {'err':'Error calling the Database level API','data':null,'msg':result.msg}        
    }
    catch(err){
        return{'err':err,'data':null,msg:'Error checking the Password'}
    }
  }