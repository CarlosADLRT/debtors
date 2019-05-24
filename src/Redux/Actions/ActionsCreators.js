import * as ActionsType from './ActionsTypes';

export const initLogin = ({ login, password }, setSubmitting) => {
  return {
    type: ActionsType.INIT_LOGIN,
    payload: { login, password, setSubmitting }
  };
};
export const finishLogin = token => {
  return {
    type: ActionsType.LOGIN_FINISHED,
    payload: token
  };
};
export const loginFail = () => {
  return {
    type: ActionsType.LOGIN_FINISHED
  };
};
export const requestLoadDebtors = () => {
  return {
    type: ActionsType.REQUEST_LOAD_DEBTORS,
    payload: {}
  };
};

export const loadDebtors = payload => {
  return {
    type: ActionsType.LOAD_DEBTORS,
    payload
  };
};
export const addDebtor = () => {
  return {
    type: ActionsType.LOAD_DEBTORS,
    payload: {}
  };
};
export const finishAddDebtor = () => {
  return {
    type: ActionsType.LOAD_DEBTORS
  };
};

export const addNewDebt = (payload, submitForm) => ({
  type: ActionsType.ADD_NEW_DEBT,
  payload,
  submitForm
});

export const initAddPay = (payload, submitForm) => ({
  type: ActionsType.INIT_PAY,
  payload,
  submitForm
});

export const addPay = payload => ({
  type: ActionsType.PAY,
  payload
});
