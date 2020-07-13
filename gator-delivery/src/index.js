import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/app/App.js';

import 'semantic-ui-css/semantic.min.css';

import * as serviceWorker from './serviceWorker';
import Firebase, {FirebaseContext} from './components/firebase';

ReactDOM.render(
  // Ensures that the firebase connection/instance only happens once
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
