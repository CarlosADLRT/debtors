import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
/*
  Store
  Redux apps have a single store which takes
  1. All Reducers which we combined into `rootReducer`
  2. An optional starting state - similar to React's getInitialState
*/

const RootReducer = combineReducers({
  AuthReducer,
  UIReducer: {}
});

export default RootReducer;
