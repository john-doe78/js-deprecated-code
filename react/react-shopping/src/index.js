import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from './reportWebVitals';

import { RegistrationComponent } from "./components/NetflixRegister";
import IndexComponent from "./components/NetflixIndex";
import TestComponent from './components/ClassComponent';
import DataBinding from './components/DataBinding';
import ComplexBinding from './components/ComplexDataBinding';
import ShoppingComponent from './components/Shopping';
import EventBinding from './components/EventBinding';
import TwoWayBinding from './components/TwoWayBinding';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
