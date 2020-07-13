import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from '../navigation'
import LandingPage from '../landing';
import SignUpPage from '../sign-up';
import SignInPage from '../sign-in';
import PasswordForgetPage from '../password-forgot';
import HomePage from '../home';
import AccountPage from '../account';
import AdminPage from '../admin';
 
import * as ROUTES from '../../constants/routes';

import '../index.css';
<<<<<<< HEAD
import Login from '../sign-in/Login'
import AddTask from '../add-task/AddTask'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar"
import TaskList from "../tasklist/TaskList"
import CreateTask from "../createtask/CreateTask"
import Board from '../community/Board'

const App = (props) => {

  return (
    <Router>
      <div className="container">
        <Navbar />
=======
import Login from '../sign-in/signIn'
import Board from '../community/Board'

const App = (props) => {
  return (
    <div className="overall-div">
      <Router>
        <div>
          <Navigation />
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
      <div className="main-title">
        <h1>Gator Delivery</h1>
          <div className="column-1 community">
          <br></br>
          <h3>Community Board</h3>
          <Board/>
          </div>
      </div>
      <div className="row-1 sign-in">
>>>>>>> c0a602a62b796ce7de9b85fed3b7e7343780ef7d
        <Login/>
        <br />
        <Route path="/" exact component={TaskList} />
        <Route path="/create" component={CreateTask} />
        <Route path="/community" component={Board} />    
      </div>
    </Router>
  );
}

export default App;
