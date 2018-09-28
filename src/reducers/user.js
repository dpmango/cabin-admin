import {
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAIL,
  AUTHORIZATION_CLEAR_ERROR,
  LOG_OUT
} from 'actions/user';

export const initialState = {
  user_id: null,
  user_details: {},
  auth_token: null,
  login_error: '',
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION_REQUEST:
      return {
        ...state,
        login_error: ''
      }
    case AUTHORIZATION_SUCCESS:
      return {
        ...state,
        user_id: action.payload.id,
        user_details: action.payload.user_details,
        auth_token: action.payload.token,
        login_error: ''
      };
    case AUTHORIZATION_FAIL:
      return {
        ...state,
        login_error: action.payload
      };
    case AUTHORIZATION_CLEAR_ERROR:
      return {
        ...state,
        login_error: ''
      };

    case LOG_OUT:
      return initialState
      
    default:
      return state;
  }
}

export default user;
