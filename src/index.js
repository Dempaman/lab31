import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tab from './Tab.js';
import Login from './Login.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Login />
    <Tab />
  </div>,
  document.getElementById('root')
  );
registerServiceWorker();
