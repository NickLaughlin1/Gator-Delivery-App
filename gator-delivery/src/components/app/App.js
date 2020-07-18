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
    <AuthProvider>
      <Router>
        <div className="container">
          <Navbar />
          <div class="dropdown">
          <button class="dropbtn">Social</button>
            <div class="dropdown-content">
              <a href="/reviews">Volunteer Reviews</a>
              <a href="/community">Community Board</a>
              <a href="/faq">FAQ</a>
          </div>
            </div>
          <div class="dropdown">
          <button class="dropbtn">Tasks</button>
            <div class="dropdown-content">
              <a href="/create">Create Task</a>
              <a href="/">View Tasks</a>
            </div>
          </div>
          <div class="dropdown">
          <button class="dropbtn">Calendar</button>
            <div class="dropdown-content">
              <a href="/calendar">Calendar</a>
            </div>
          </div>
          <div class="dropdown">
          <button class="dropbtn">Account</button>
            <div class="dropdown-content">
              <a href="/signin">Login</a>
              <a href="/signup">Sign-up</a>
            </div>
          </div>
          <br />
          <Route path={ROUTES.CREATE} component={CreateTask} />
          <Route path={ROUTES.COMMUNITY} component={Board}/>
          <Route path={ROUTES.CALENDAR} component={Calendar} />
          <hr />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> */}
          <Route path={ROUTES.HOME} component={HomePage} />
          {/* <Route path={ROUTES.ACCOUNT} component={AccountPage} /> */}
          {/* <Route path={ROUTES.ADMIN} component={AdminPage} />   */}
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;
