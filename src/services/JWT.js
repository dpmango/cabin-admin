import { BACKEND_URL } from './JWT';

export const authenticateUser = (email, password) => {
  let data = {
    auth: {
      email: email,
      password: password
    }
  }
  return axios.post(BACKEND_URL + '/user/token', data)
    .then(function (response) {
      return response.data.jwt
    })
    .catch(function (error) {
      return undefined
    })
}

export const getCurrentUser = (jwt) => {
  var config = {
    headers: {}
  }
  if (jwt) {
    config['headers']['Authorization'] = 'Bearer ' + jwt
  }
  return axios.get(BACKEND_URL + '/users/current', config)
    .then(function(response){
      return response.data
    })
    .catch(function (error) {
      return undefined
    })
},

export const getPage = (jwt, id) => {
  var config = {
    headers: {}
  }
  if (jwt) {
    config['headers']['Authorization'] = 'Bearer ' + jwt
  }
  return axios.get(BACKEND_URL + '/pages/' + id, config)
    .then(function(response){
      return response.data
    })
    .catch(function (error) {
      return undefined
    })
}
