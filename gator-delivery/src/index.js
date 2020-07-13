import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/app/App.js';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
