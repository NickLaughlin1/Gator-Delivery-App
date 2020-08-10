import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as firebase from "firebase/app";
import * as ROUTES from '../../constants/routes';
import Home from '../home'
import VolHome from '../volunteer'

const UserHomePage = (props) => {
    const [role, setRole] = useState('');
    //useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            //console.log("signed in");
            //console.log(user.email);
            //setEmail(user.email);
            let url = "/users/";
            let search = url.concat(user.email);
            //console.log(email);
            //console.log(search);
            axios
              .get(search)
              .then((response) => {
                  let r = response.data[0].role;
                    console.log('USERS STATUS: ', r);
                    setRole(r);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      //}, []);
      if (role === 'Volunteer Handyman') {
        return (
            <VolHome
              />
        );
      };

      //if (role === 'Regular Customer') {
        return (
            <div>
            <Home
                role={role}
            />
            
            </div>
        );
      //} else {
          

      
    
};

export default UserHomePage;