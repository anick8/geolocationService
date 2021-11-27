const axios = require('axios')
const PROD = 1
module.exports = {
  readGeolocation:async (data) => {
    try {
        res = await axios({method: 'post',
        url: PROD ? 'https://hashx-api-geolocation-read.herokuapp.com/readGeolocation':'http://localhost:8080/readGeolocation',
        data: data})
        return {'err':null,'data':res.data.data,'msg':'readGeolocation Request Successful & ' + res.data.msg}
      }
      catch (err) {
        return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs ' + err}
      }
  },
  createGeolocation: async (data) => {
    try {
          console.log(data);
          res = await axios({method: 'post',
          url: PROD ? 'https://hashx-api-geolocation-cud.herokuapp.com/createGeolocation ': 'http://localhost:8080/createGeolocation',
          data: data})
          return {'err':null,'data':res.data.data,'msg':'createGeolocation Request Successful & ' + res.data.msg}
        }
    catch (err) {
          console.log(err);
                 return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  readGeolocationByLatLong: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-geolocation-read.herokuapp.com/readGeolocationByLatLong':'http://localhost:8080/readGeolocationByLatLong',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'readGeolocationByLatLong Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
}