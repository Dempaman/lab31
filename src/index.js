import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Tab from './Tab';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Tab />
    <Login />
  </div>,
  document.getElementById('root')
  );
registerServiceWorker();
