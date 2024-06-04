import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// react-router-dom
import {BrowserRouter} from 'react-router-dom';

// redux
import { Provider } from 'react-redux'
import { store } from './Redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);