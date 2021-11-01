const { F } = require('ramda');
const check = require('../lib/checkLibrary');
const logic = require('../lib/logicLibrary')

exports.isFollow = async (req) => {
  var body = req.body; 
  result = await logic.isFollow(body)
  if (!result.err)
    return{'err':null,'data':result.data,'msg':result.msg}
  else
    return{'err':result.err,'data':null,'msg':result.msg}
}

exports.getAllFollows = async (req) => {
  var body = req.body; 
  result = await logic.getAllFollows(body)
  if (!result.err)
    return{'err':null,'data':result.data,'msg':result.msg}
  else
    return{'err':result.err,'data':null,'msg':result.msg}
}

exports.follow = async (req) => {
  var body = req.body; 
  result = await logic.follow(body)
  if (!result.err)
    return{'err':null,'data':result.data,'msg':result.msg}
  else
    return{'err':result.err,'data':null,'msg':result.msg}
}

exports.unfollow = async (req) => {
  var body = req.body; 
  result = await logic.unfollow(body)
  if (!result.err)
    return{'err':null,'data':result.data,'msg':result.msg}
  else
    return{'err':result.err,'data':null,'msg':result.msg}
}
  
  