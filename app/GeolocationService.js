const logic = require('../lib/logicLibrary')

exports.getGeolocation = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await logic.getGeolocation(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}    
}

exports.createGeoLocation = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await logic.createGeoLocation(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}

}

exports.getorCreateGeolocation = async (req) => {
  var body = req.body; 
  result = await logic.getorCreateGeolocation(body)
  if (result.err) return{'err':result.err,'data':null,'msg':result.msg}
  return{'err':null,'data':result.data,'msg':result.msg}

}
  
  