import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tab from './Tab';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Tab />
  </div>,
  document.getElementById('root')
  );
registerServiceWorker();
