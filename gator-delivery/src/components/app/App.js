import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
 
import * as ROUTES from '../../constants/routes';

import LandingPage from '../landing';
import SignUpPage from '../sign-up';
import SignInPage from '../sign-in';
import PasswordForgetPage from '../password-forgot';
import HomePage from '../home';
import AccountPage from '../account';
import AdminPage from '../admin';

import '../index.css';
import AddTask from '../add-task/AddTask'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../navbar/Navbar"
import TaskList from "../tasklist/TaskList"
import CreateTask from "../createtask/CreateTask"
import Board from '../community/Board'

const App = (props) => {

  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={CreateTask} />
        <Route path="/list" component={TaskList} />
        <Route path="/community" component={Board} />    
        <hr />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />  
      </div>
    </Router>
  );
}

export default App;
