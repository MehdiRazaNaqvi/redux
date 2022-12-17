import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './pages/home';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store  from "../src/store/store.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <App />
  </Provider>


);




reportWebVitals();
