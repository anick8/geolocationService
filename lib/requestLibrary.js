const axios = require('axios')
const PROD = 1
module.exports = {
  isFollow:async (data) => {
    try {
        res = await axios({method: 'post',
        url: PROD ? 'https://hashx-api-follow-read.herokuapp.com/isFollow':'http://localhost:8080/isFollow',
        data: data})
        return {'err':null,'data':res.data.data,'msg':'isFollow Request Successful & ' + res.data.msg}
      }
      catch (err) {
        return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs' + err}
      }
  },
  getAllFollows: async (data) => {
    try {
          res = await axios({method: 'post',
          url: PROD ? 'https://hashx-api-follow-read.herokuapp.com/readAllFollows': 'http://localhost:8080/readAllFollows',
          data: data})
          return {'err':null,'data':res.data.data,'msg':'readAllFollows Request Successful & ' + res.data.msg}
        }
    catch (err) {
                 return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  follow: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-follow-cud.herokuapp.com/createFollow':'http://localhost:8080/createFollow',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'createFollow Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  unfollow: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-follow-cud.herokuapp.com/deleteFollow':'http://localhost:8080/deletFollow',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'deleteFollow Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },

}