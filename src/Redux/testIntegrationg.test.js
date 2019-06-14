import { loadDebtors } from './Actions/ActionsCreators';
import { loadSaga } from './Sagas/DebtorsSaga';
import DebtService from '../Services/DebtService';
import { expectSaga, testSaga } from 'redux-saga-test-plan';

test('exact order with redux-saga-test-plan', () => {
  testSaga(loadSaga, { type: '', payload: '' })
    .next()
    .call(DebtService.loadDebts)
    .next({ success: true, results: [] })
    .put(loadDebtors([]))
    .next()

    // assert that the saga is finished
    .isDone();
});
test('exact order with redux-saga-test-plan', () => {
  testSaga(loadSaga, { type: '', payload: '' })
    .next()
    .call(DebtService.loadDebts)
    .next({ success: false, results: [] })
    .put(loadDebtors())
    .next()

    // assert that the saga is finished
    .isDone();
});
