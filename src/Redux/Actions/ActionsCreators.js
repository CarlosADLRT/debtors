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
