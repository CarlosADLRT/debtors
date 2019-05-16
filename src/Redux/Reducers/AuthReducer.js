import * as ActionsTypes from '../Actions/ActionsTypes';

const initialState = {
  token: localStorage.getItem('token')
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.LOGIN_FINISHED:
      console.log(payload);
      return { ...state, token: payload };

    default:
      return state;
  }
};
