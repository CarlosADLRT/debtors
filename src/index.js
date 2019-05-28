import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Styles/index.scss';
import * as serviceWorker from './serviceWorker';
import Store from './Redux/index';
import { Provider } from 'react-redux';
import MainContainer from './Components/Containers/MainContainer';
import 'react-day-picker/lib/style.css';
import 'izitoast/dist/css/iziToast.min.css';

ReactDOM.render(
  <Provider store={Store}>
    <MainContainer />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
