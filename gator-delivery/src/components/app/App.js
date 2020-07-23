import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AuthProvider} from "../session/withAuthentication";

import * as ROUTES from '../../constants/routes';

import LandingPage from '../landing';
import SignUpPage from '../sign-up';
import SignInPage from '../sign-in';
import PasswordForgetPage from '../password-forgot';
import HomePage from '../home';
import AccountPage from '../account';
import AdminPage from '../admin';

import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/Navbar";
import TaskList from "../tasklist/TaskList";
import CreateTask from "../createtask/CreateTask";
import Board from '../community/Board';
//npm install react-calendar or yarn add react-calendar
import Calendar from '../calendar/Calendar'

const App = () => {
  return(
    <div className='page'>
    <AuthProvider>
      <Router>
        <div className='c'>
          <Navbar />
          <br />
          <div className='body'>
          <Route path={ROUTES.CREATE} component={CreateTask} />
          <Route path={ROUTES.COMMUNITY} component={Board}/>
          <Route path={ROUTES.CALENDAR} component={Calendar} />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> */}
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          {/* <Route path={ROUTES.ADMIN} component={AdminPage} />   */}
          </div>
        </div>
      </Router>
    </AuthProvider>
    
    <footer className='site-footer'>
      <div className='container'>
        <h3>This is the footer</h3>
      </div>
    </footer>
    </div>
  );
}
export default App;
