import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './css/app.css';

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
