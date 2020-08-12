import React, { useEffect, useState } from "react";
import * as firebase from "firebase/app";
import ViewTasks from "../tasklist/ViewAll.js";
import axios from 'axios';
import "../index.css";
  
const VolHome = (props) => {

  const [role, setRole] = useState('');
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            //console.log("signed in");
            //console.log(user.email);
            //setEmail(user.email);
            let url = "http://localhost:5000/users/";
            let search = url.concat(user.email);
            //console.log(email);
            //console.log(search);
            axios
              .get(search)
              .then((response) => {
                  let r = response.data[0].role;
                    //console.log('USERS STATUS: ', r);
                    setRole(r);
              })
              .catch((error) => {
                //console.log('ISSUES');
                console.log(error);
              });
          }
        });
      }, []);

  if (role === 'Regular Customer') {
    return null;
  }

  return (
      <>
      <br></br>
      <div className='container'>
        <div className='content' >
          <div style={{margin: "auto", width: "70%"}}>
            <div className='mb-panel posted-jobs listed-jobs' id='my-posted-jobs' style={{borderRadius: "30px", margin: "auto"}}>
              <h1 className='heading-large'>
                Available jobs
              </h1>         
                  <ViewTasks/>     
          </div>
          
        </div>
      </div>
      </div>
      </>
  );
};

export default VolHome;
