import {put} from 'redux-saga/effects';
import {sbxCoreService} from '../../Network';
import * as Actions from '../Actions/ActionsCreators';

export function* debtorSaga({type, payload}) {
  const res = yield sbxCoreService.with('debt').andWhereIsEqualTo('done', false).find();

  if (res.success) {
    console.log(res);
  } else {
    yield put(Actions.loginFail());
  }
}
