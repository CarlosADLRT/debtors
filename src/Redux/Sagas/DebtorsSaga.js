import { put, call } from 'redux-saga/effects';
import { sbxCoreService } from '../../Network';
import * as Actions from '../Actions/ActionsCreators';
import DebtService from '../../Services/DebtService';
import { toast } from '../../Services/AlertService';

export function* loadSaga({ type, payload }) {
  const res = yield call(DebtService.loadDebts);
  if (res.success) {
    yield put(Actions.loadDebtors(res.results));
  } else {
    yield put(Actions.loadDebtors());
  }
}
export function* createSaga({ type, payload }) {
  const res = yield sbxCoreService.insert('debt', { ...payload });

  if (res.success) {
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
    debugger;
    yield put(Actions.loadDebtors(res.results));
  } else {
    yield put(Actions.loginFail());
  }
}
export function* addSaga({ type, payload, submitForm }) {
  const res = yield DebtService.addNewDebt(payload);
  submitForm(false);
  if (res.success) {
    toast('Prestamo creado');
  }
}
export function* paySaga({ type, payload, submitForm }) {
  const res = yield DebtService.addPay(payload);

  if (res.success) {
    yield put(Actions.requestLoadDebtors());
    submitForm(false);
    toast('Pago agregado');
  }
}

export function* testSaga() {
  const res = yield call(DebtService.loadDebts);
  yield put(Actions.loadDebtors([]));
}
