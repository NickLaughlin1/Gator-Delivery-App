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
            <div className='layout-content-sidebar'>
              <div className='layout-content'>
                <div className='mb-panel posted-jobs' id='my-posted-jobs'>
                  <h1 className='heading-large'>
                    My posted jobs
                  </h1>
                  <TaskList/>
                </div>
              </div>
              <div className='layout-sidebar'>
                <div className='mb-panel'>
                  <div className='mb-panel_header'>
                    <h3 className='heading-caps'>Sidebar panel</h3>
                  </div> 
                  <p>Click here to add a task</p>
                  <div className="actions">
                    <Link to={ROUTES.CREATE} className="nav-link">
                      <button type="button" class="btn btn-primary btn-lg">Post a job</button>
                    </Link>
                  </div>
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