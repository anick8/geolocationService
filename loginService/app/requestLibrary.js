const axios = require('axios')
const PROD = 1
module.exports = {
  readGeolocationByLatLong:async (data) => {
    try {
        res = await axios({method: 'post',
        url: PROD ? 'https://hashx-api-geolocation-read.herokuapp.com/readGeolocationByLatLong ':'http://localhost:8080/readGeolocationByLatLong',
        data: data})
        console.log(res.data.err)
        return {'err':null,'data':res.data.data,'msg':'readGeolocationByLatLong Request Successful & ' + res.data.msg}
      }
      catch (err) {
        return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs' + err}
      }
  },
  createGeoLocation: async (data) => {
    try {
          res = await axios({method: 'post',
          url: PROD ? 'https://hashx-api-geolocation-cud.herokuapp.com/createGeolocation': 'http://localhost:8080/createGeolocation',
          data: data})
          return {'err':null,'data':res.data.data,'msg':'createGeolocation Request Successful & ' + res.data.msg}
        }
    catch (err) {
                 return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  readDeviceByParams: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? ' https://hashx-api-device-read.herokuapp.com/readDeviceByParams':'http://localhost:8080/readDeviceByParams',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'readDeviceByParams Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  createDevice: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-device-cud.herokuapp.com/createDevice':'http://localhost:8080/createDevice',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'createDevice Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  readSession: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-session-read.herokuapp.com/readSession ':'http://localhost:8080/readSession',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'readSession  Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  updateSession: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-session-cud.herokuapp.com/updateSession ':'http://localhost:8080/createIdentity',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'updateSession Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the updateSession DataBase Layer APIs : ' + err}
    }
  },
  createSession: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-session-cud.herokuapp.com/createSession ':'http://localhost:8080/createSession',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'createSession Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  updateDevice: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-device-cud.herokuapp.com/updateDevice':'http://localhost:8080/updateDevice',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'updateDevice Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  matchPassword: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-password-read.herokuapp.com/matchPassword':'http://localhost:8080/matchPassword',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'matchPassword Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  readUser: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-user-read.herokuapp.com/readUser':'http://localhost:8080/readUser',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'readUser Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
}
