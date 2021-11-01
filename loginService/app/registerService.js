const { F } = require('ramda');
const requestLibrary = require('./requestLibrary')

//Public function to check if Username is available
exports.checkUsernameAvailable = async (req) => {
  try{
      var data  = {'Username':req.body.Username};
      result = checkResultValid(await requestLibrary.checkUsername(data),1)//.data.data?1:0
      return {'err':null,'data':result.data.length?0:1,'msg' : 'Check Username Successful & '+result.msg}
  }
  catch(err){
      return{'err':err,'data':null,msg:'Error checking the username'}
  }
}

//Public function to check if Email is available
exports.checkEmailAvailable = async (req) => {
  try{
      var data = {'Email':req.body.Email}
      result  = checkResultValid(await requestLibrary.checkEmail(data),0)
      return {'err':null,'data':result.data.length?0:1,'msg' : 'Check Email Successful & '+result.msg}
  }
  catch(err){
      return{'err':err,'data':null,msg:'Error checking the Email'}
  }
}


//Process the result of checkUsername / checkEmail
var checkResultValid = (result,flag) => 
{
    if(result.data)
        return {'err': null,'data':result.data,'msg':(flag?"Username":"Email") + (result.data.length? " Not":"") +( " Available") }
    else
      return {'err':result.err,'data':null,'msg':'Check DB Failed at API '+result.msg}
}

//Check for errors in create statements for User, Identity and Password
var checkError = (result,flag) =>
{
  fC = flag==1?"User":flag==2?"Identity":"Password"
  if(!result.err)
    return {'err': null,'data': result.data,'msg': fC+' Registration Successful'}
  else  
    return {'err': result.err,'data': null,'msg': fC+' Registration Failed'}
}

//Rollback changes in case of failure
var rollback = async (data,flag)  => {
  try{
    if(flag==2)
      return await requestLibrary.deleteIdentity({'IdentityUUID':data})
    else
      return await requestLibrary.deleteUser({'Email':data})
  }
  catch(err)
  { //Raise Flag
    return{'err':err,'data':data,'msg':'Rollback Failed!'}
  }
}

//Transaction to create rows in 3 tables
var createUserIdentityPassword = async (Username,Email,SaltedHash) => {
  try{
    res = checkError( await requestLibrary.createUser({'Email':Email}) ,1)
    var UserUUID = res.data.UserUUID
    try
    {
      res2 = checkError( await requestLibrary.createIdentity({'Username':Username,'UserUUID':UserUUID}),2)
    
      var IdentityUUID = res2.data.IdentityUUID
      try{
        res3 = checkError( await requestLibrary.createPassword({'UserUUID':UserUUID,'SaltedHash':SaltedHash}) ,3) 
        return{'err':null,'data':res3.data,'msg':' Register Success!'}
      }
      catch(err){
        await rollback(IdentityUUID,2)
        await rollback(Email,1)
        return{'err':err,'data':null,'msg':'Try Register Code Failed at createPassword. Rollback Successful'}
      }
    }
    catch(err)
    {
      await rollback(Email,1)
      return{'err':err,'data':null,'msg':'Try Register Code Failed at createIdentity. Rollback Successful'}
    }
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Trying Register Code Failed at createUser.'}
  }
}


exports.register = async (req) => {
  var {Username,Email,SaltedHash} = req.body;
  resultUSN = await exports.checkUsernameAvailable(req)
  if(resultUSN.data==1)
  {
    resultEM = await exports.checkEmailAvailable(req)
    if(resultEM.data==1)    
        return await createUserIdentityPassword(Username,Email,SaltedHash)
    else
      return{'err':resultEM.err,'data':null,'msg':'Cannot Register & '+ resultEM.msg}
  }
  else
    return{'err':resultUSN.err,'data':null,'msg':'Cannot Register & '+ resultUSN.msg}
    
} 
