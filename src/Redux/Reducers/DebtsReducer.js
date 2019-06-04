import * as ActionsTypes from '../Actions/ActionsTypes';

const initialState = {
  debts: [],
  originalDebts: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.REQUEST_LOAD_DEBTORS:
      return { ...state, loading: true };
    case ActionsTypes.LOAD_DEBTORS:
      return {
        ...state,
        debts: payload,
        originalDebts: payload,
        loading: false
      };
    case ActionsTypes.PAY:
      return { ...state, debts: payload };
    case ActionsTypes.FILTER_LIST:
      return {
        ...state,
        debts: payload
          ? state.originalDebts.filter(i =>
              i.debtor.toLowerCase().includes(payload.toLowerCase())
            )
          : state.originalDebts
      };
    default:
      return state;
  }
};
