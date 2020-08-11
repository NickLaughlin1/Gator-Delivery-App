/*
 *  This will load the page for logged in users to view their open tasks. It will list all currently open tasks
 *  for the user and will also have a sidebar option to create another task.
 */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import * as firebase from "firebase/app";
import TaskList from "../tasklist/TaskList";
import axios from 'axios';
  
const Home = (props) => {

  const [role, setRole] = useState('');
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log("signed in");
            console.log(user.email);
            //setEmail(user.email);
            let url = "http://localhost:5000/users/";
            let search = url.concat(user.email);
            //console.log(email);
            console.log(search);
            axios
              .get(search)
              .then((response) => {
                  let r = response.data[0].role;
                    console.log('USERS STATUS: ', r);
                    setRole(r);
              })
              .catch((error) => {
                console.log('ISSUES');
                console.log(error);
              });
          }
        });
      }, []);

  

  return (
    <div>
      <h1></h1>
      <div className='container1 page'>
        <div className='content'>
          <div className='row'>
              <div className='layout-content'>
                <div className='mb-panel posted-jobs' id='my-posted-jobs'>
                  <h1 className='heading-large'>
                    My posted jobs
                  </h1>                
                      <TaskList/>
                </div>
              </div>
            <div className="layout-sidebar">
              <div className="mb-panel">
                <div className="mb-panel_header">
                  <h3 className="heading-caps">Post a new job</h3>
                </div>
                <p className="cont-body">
                  Click here to create a new job and let volunteers near you
                  see!
                </p>
                <div className="actions">
                  <Link to={ROUTES.CREATE} className="nav-link">
                    <button type="button" className="btn btn-success btn-lg">
                      Post a job
                    </button>
                  </Link>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;