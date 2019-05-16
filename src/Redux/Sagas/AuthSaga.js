import { put } from 'redux-saga/effects';
import { sbxSessionService } from '../../Network';
import Environment from '../../Utils/Environment';
import * as Actions from '../Actions/ActionsCreators';
export function* loginSaga({ type, payload }) {
  const res = yield sbxSessionService.login(
    payload.login,
    payload.password,
    Environment.domain
  );
  if (res.success) {
    localStorage.setItem('token', res.token);
    yield put(Actions.finishLogin(res.token));
  } else {
    yield put(Actions.loginFail());
  }
  payload.setSubmitting(false);
}
