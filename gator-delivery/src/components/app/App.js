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
        <Login/>
      </div>
    </div>
  );
}

export default App;
