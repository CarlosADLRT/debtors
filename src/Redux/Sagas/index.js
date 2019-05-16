import { all, takeEvery } from 'redux-saga/effects';
import * as ActionTypes from '../Actions/ActionsTypes';
import { loginSaga } from './AuthSaga';
import * as DebtorSaga from './DebtorsSaga';

export function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.INIT_LOGIN, loginSaga),
    takeEvery(ActionTypes.REQUEST_LOAD_DEBTORS, DebtorSaga.loadSaga),
    takeEvery(ActionTypes.ADD_NEW_DEBT, DebtorSaga.addSaga)
  ]);
}
