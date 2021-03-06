import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import App from './container/App/';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createStore, applyMiddleware} from 'redux';
import {rootReducer} from './store/reducers';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store= {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
