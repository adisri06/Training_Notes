import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//Default export is the app package , and the remaining packages which are not exported are placed in {} brackets
import App , {Welcome} from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers/reducers';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store= {store}>
      <App />
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
