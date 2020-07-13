import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/app/App.js';
<<<<<<< HEAD
import 'semantic-ui-css/semantic.min.css'
=======
import Firebase, {FirebaseContext} from './components/firebase';
>>>>>>> c0a602a62b796ce7de9b85fed3b7e7343780ef7d
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // Ensures that the firebase connection/instance only happens once
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
