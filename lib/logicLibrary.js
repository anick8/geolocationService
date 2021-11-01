const requestLibrary = require('./requestLibrary')
const check = require('./checkLibrary')
exports.isFollow = async (body) => {
  try{
    res = await requestLibrary.isFollow({'Followers':body.Follower,'Following':body.Following})
    if(!res.err)
      return{'err':null,'data':res.data,'msg':'Successfully checked isFollow & '+res.msg}
    else
      return{'err':res.err,'data':null,'msg':res.msg}
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at checking isFollow'}
  }
}

exports.getAllFollows = async (body) => {
try{
    res = await requestLibrary.getAllFollows({'Follower':body.Follower,'limit':body.limit,'offset':body.offset,'ErsOrIng':body.ErsOrIng})
    if(!res.err)
      return{'err':null,'data':res.data,'msg':'Successfully got AllFollows & '+res.msg}
    else
      return{'err':res.err,'data':null,'msg':res.msg}
}
catch(err)
{
  return{'err':err,'data':null,'msg':'Code Failed at calling getAllFollows'}
}
}

exports.follow = async (body) => {
  try{
    res = await requestLibrary.follow({'Follower':body.Follower,'Following':body.Following})
    if(!res.err)
      return{'err':null,'data':res.data,'msg':'Successfully followed & '+res.msg}
    else
      return{'err':res.err,'data':null,'msg':res.msg}
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling follow'}
  }
}

exports.unfollow = async (body) => {
  try{
    res = await requestLibrary.unfollow({'Follower':body.Follower,'Following':body.Following})
    if(!res.err)
      return{'err':null,'data':res.data,'msg':'Successfully unfollowed & '+res.msg}
    else
      return{'err':res.err,'data':null,'msg':res.msg}
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling unfollow'}
  }
}


