import { combineReducers } from 'redux';
import {reducer as notificationsReducer} from 'reapop';

import user from './user';

export default combineReducers({
  user,
  notifications: notificationsReducer()
})
