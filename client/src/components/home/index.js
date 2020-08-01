/*
 *  This will load the page for logged in users to view their open tasks. It will list all currently open tasks
 *  for the user and will also have a sidebar option to create another task.
 */
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import * as firebase from "firebase/app";
import TaskList from "../tasklist/TaskList";
  
const Home = (props) => {

  return (
    <div>
      <h1></h1>
      <div className='container page'>
        <div className='content'>
          <div className='row'>
              <div className='viewjob-main right-marg'>
                <div className='mb-panel posted-jobs' id='my-posted-jobs'>
                  <h1 className='heading-large'>
                    My posted jobs
                  </h1>
                  <TaskList/>
                </div>
              </div>
              <div className='edit-sidebar'>
                <div className='mb-panel'>
                  <div className='mb-panel_header'>
                    <h3 className='heading-caps'>Post a new job</h3>
                  </div> 
                  <p className='cont-body'>Click here to create a new job and let volunteers near you see!</p>
                  <div className="actions">
                    <Link to={ROUTES.CREATE} className="nav-link">
                      <button type="button" className="btn btn-success btn-lg">Post a job</button>
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