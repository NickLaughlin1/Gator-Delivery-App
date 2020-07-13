import app from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBLMSlM0gcFg3sO2cgRGZYFoPK00DvWSNY",
    authDomain: "gator-delivery.firebaseapp.com",
    databaseURL: "https://gator-delivery.firebaseio.com",
    projectId: "gator-delivery",
    storageBucket: "gator-delivery.appspot.com",
    messagingSenderId: "749620819788",
    appId: "1:749620819788:web:da02f015b54b84629b01e9",
    measurementId: "G-EXRYHP947Q"
  };

  class Firebase {
      constructor() {
          app.initializeApp(firebaseConfig);  //Initializes the firebase connection
          // Allows for authentication
          this.auth = app.auth();
      }

      // Authentication API
      doCreateUserWithEmailAndPassword = (email, password) => {
          this.auth.createUserWithEmailAndPassword(email, password);
      }

      doSignInWithEmailAndPassword = (email, password) => {
          this.auth.signInWithEmailAndPassword(email, password);
      }

      doSignOut = () => this.auth.signOut();

      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

      doPasswordUpdate = password => {
          this.auth.currentUser.updatePassword(password);
      }
  }

  export default Firebase;