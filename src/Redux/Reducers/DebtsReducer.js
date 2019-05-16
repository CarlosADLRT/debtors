import * as ActionsTypes from '../Actions/ActionsTypes';

const initialState = {
  debts: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.REQUEST_LOAD_DEBTORS:
      return { ...state, loading: true };

    case ActionsTypes.LOAD_DEBTORS:
      return { ...state, debts: payload, loading: false };
    default:
      return state;
  }
};
