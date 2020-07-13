import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/app/App.js';
import Firebase, {FirebaseContext} from './components/firebase';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // Ensures that the firebase connection/instance only happens once
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
