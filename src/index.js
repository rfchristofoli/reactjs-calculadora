import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Calculadora from './views/calculadora.view';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>,
  document.getElementById('root')
);

//reportWebVitals();
