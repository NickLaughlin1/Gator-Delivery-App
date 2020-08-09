import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBLMSlM0gcFg3sO2cgRGZYFoPK00DvWSNY",
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
});


export default app;

