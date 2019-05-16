import { put } from 'redux-saga/effects';
import { sbxCoreService } from '../../Network';
import * as Actions from '../Actions/ActionsCreators';
import DebtService from '../../Services/DebtService';
import NotificationSystem from 'react-notification-system';

export function* loadSaga({ type, payload }) {
  const res = yield sbxCoreService
    .with('debt')
    .andWhereIsEqualTo('done', false)
    .find();

  if (res.success) {
    console.log(res);
    yield put(Actions.loadDebtors(res.results));
  } else {
    yield put(Actions.loginFail());
  }
}
export function* createSaga({ type, payload }) {
  const res = yield sbxCoreService.insert('debt', { ...payload });

  if (res.success) {
    console.log(res);
    // yield put(Actions.finishAdd());
  } else {
    yield put(Actions.loginFail());
  }
}
export function* debtorSaga({ type, payload }) {
  const res = yield sbxCoreService
    .with('debt')
    .andWhereIsEqualTo('done', false)
    .find();

  if (res.success) {
    console.log(res);
    yield put(Actions.loadDebtors(res.results));
  } else {
    yield put(Actions.loginFail());
  }
}
export function* addSaga({ type, payload, submitForm }) {
  const res = yield DebtService.addNewDebt(payload);
  submitForm(false);
  if (res.success) {
    NotificationSystem.addNotification({
      message: 'Notification message',
      level: 'success'
    });
  }
}
