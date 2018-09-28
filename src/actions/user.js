import api from 'services/Api';

export const AUTHORIZATION_REQUEST = 'AUTHORIZATION_REQUEST';
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_FAIL = 'AUTHORIZATION_FAIL';
export const AUTHORIZATION_CLEAR_ERROR = 'AUTHORISZATION_CLEAR_ERROR'
export const LOG_OUT = 'LOG_OUT';

export const loginRequest = (data) => {
  return {
    type: AUTHORIZATION_REQUEST,
    payload: data
  }
}

export const clearAuthError = () => {
  return {
    type: AUTHORIZATION_CLEAR_ERROR
  }
}

export const logIn = (payload) => (
  new Promise((resolve, reject) => {

    const email = payload.email
    const password = payload.password.toString()

    if ( email === "admin@cabin.com.sg" && password === "123456"){
      const userData = {
        id: 1,
        token: "dodR224FFF@@4FFDss(442fdfFsLKnf512",
        user_details: {
          email: email,
          name: "Rifeng",
          avatar: "rifeng-avatar.png"
        }
      }
      resolve(userData); // TODO - refactor to JWT token

    } else {
      reject(new Error('Wrong username or password'));
    }
    // api
    //   .get(`users?email=${payload.email}`)
    //   .then(res => {
    //
    //     // TODO
    //     // should get flag from server on production
    //     const userData = res.data[res.data.length - 1]
    //     if ( payload.password.toString() ===
    //          userData.password ){
    //       resolve(userData);
    //     }
    //   })
    //   .catch(err => {
    //     reject(new Error('Wrong username or password'));
    //   })
  })
);

export const logOut = () => {
  return {
    type: LOG_OUT
  }
}
