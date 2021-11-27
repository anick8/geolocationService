const requestLibrary = require('./requestLibrary')
exports.getGeolocation = async (body) => {
  try{
    res = await requestLibrary.readGeolocation({'GeolocationUUID':body.GeolocationUUID})
    if(res.err) return {'err':res.err,'data':null,'msg':res.msg}
    return {'err':null,'data':res.data,'msg':'Successfully got GeoLocation & '+res.msg}     
  }
  catch(err){
    return{'err':err,'data':null,'msg':'Code Failed at checking isFollow'}
  }
}

var createGeoLocation = async (body) => {
try{
    res = await requestLibrary.createGeolocation({'Lat':body.Lat,'Long':body.Long})
    if(res.err)return {'err':res.err,'data':null,'msg':res.msg}
    if(res.data.GeolocationUUID)return{'err':null,'data':res.data,'msg':'Successfully createdGeoLocation & '+res.msg}
    return{'err':null,'data':res.data,'msg':res.msg}  
}
catch(err){
  return{'err':err,'data':null,'msg':'Code Failed at calling getAllFollows'}
  }
}

exports.getorCreateGeolocation = async (body) => {
  try{
      res = await requestLibrary.readGeolocationByLatLong({'Lat':body.Lat,'Long':body.Long})
      if(res.err)return{'err':res.err,'data':null,'msg':res.msg}
      if(res.data)return{'err':null,'data':res.data,'msg':'Successfully got geolocation & '+res.msg}
      return await createGeoLocation(body);
  }
  catch(err){
    return{'err':err,'data':null,'msg':'Code Failed at calling getorCreateGeolocation'}
  }
 }
exports.createGeoLocation = createGeoLocation



