import { call, put, takeLatest } from 'redux-saga/effects';
import { logIn, signUp } from 'actions/user';

import {
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAIL
} from 'actions/user'

function* logInSaga({ payload }) {
  try {
    const res = yield call(logIn, payload);
    yield put({ type: AUTHORIZATION_SUCCESS, payload: res });
  } catch (error) {
    yield put({ type: AUTHORIZATION_FAIL, payload: error.message, error: true });
  }
}

export default function* () {
  yield takeLatest(AUTHORIZATION_REQUEST, logInSaga)
}
