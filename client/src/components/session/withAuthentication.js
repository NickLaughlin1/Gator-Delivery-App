import React, { useEffect, useState } from "react";
import app from "../firebase/firebase.js";
import axios from "axios";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const axiosAuth = async (method, path, data, res, err) => {
    axios({
      "method": method,
      url: 'http://localhost:5000' + path,
      "data": data,
      headers: {"AuthToken": await currentUser.getIdToken()}
    }).then(res).catch(err);
  };

  const SignOut = async () => {
    await app.auth().signOut();
  }

  return (

    <AuthContext.Provider value={{ currentUser, axiosAuth, SignOut }}>

      {children}
    </AuthContext.Provider>
  );
};