import {all, takeEvery} from 'redux-saga/effects';
import * as ActionTypes from '../Actions/ActionsTypes';
import {loginSaga} from './AuthSaga';
import {debtorSaga} from './DebtorsSaga';

export function* rootSaga() {
  yield all([takeEvery(ActionTypes.INIT_LOGIN, loginSaga), takeEvery(ActionTypes.REQUEST_LOAD_DEBTORS, debtorSaga)]);
}
