import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "../session/withAuthentication";

import * as ROUTES from "../../constants/routes";

import LandingPage from "../../views/LandingPage/LandingPage.js";
<<<<<<< HEAD
=======
import SignUpPage from "../sign-up";
import SignInPage from "../sign-in";
import ReviewPage from "../reviews/Bored.js";
>>>>>>> parent of 8695466... Merge pull request #45 from beaubakken/master_deploy
import Footer from "..//Footer/Footer.js";
// import PasswordForgetPage from "../password-forgot";
import HomePage from "../home";
import AccountPage from "../account";
// import AdminPage from "../admin";

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "../navbar/Navbar";
// import TaskList from "../tasklist/TaskList";
import CreateTask from "../createtask/CreateTask";
<<<<<<< HEAD
import {PostBoard as PostBoard} from "../community/Board";
import Board from '../community/Board';
import Rored from '../reviews/Rored';
import faq from '../faq/faq';
import Delete from "../delete";
=======
import Board from "../community/Board";
>>>>>>> parent of 8695466... Merge pull request #45 from beaubakken/master_deploy
// import Bored from "../reviews/Bored";
import faq from "../faq/faq";
//npm install react-calendar or yarn add react-calendar
import Calendar from "../calendar/Calendar";
import ViewJob from "../viewjob/ViewJob";
import path from "path";
import 'semantic-ui-css/semantic.min.css'
import "./style.scss";


const App = () => {
  return (
    <div className="page">
      <AuthProvider>
        <Router>
          <div className="c">
            <Navbar1 />

<<<<<<< HEAD
            <div className="body bg-gradient">
              <Route path={ROUTES.CREATE} component={CreateTask} />
              {/* <Route path={ROUTES.COMMUNITY} component={CommunityBoard} /> */}
              <Route path={ROUTES.DELETE} component={Delete} />
              <Route path={ROUTES.REVIEWS} component={Rored} />
=======
            <div className="body">
              <Route path={ROUTES.CREATE} component={CreateTask} />
              <Route path={ROUTES.COMMUNITY} component={Board} />
>>>>>>> parent of 8695466... Merge pull request #45 from beaubakken/master_deploy
              <Route path={ROUTES.CALENDAR} component={Calendar} />
              <Route path={ROUTES.FAQ} component={faq} />
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
              {/* <Route path={ROUTES.SIGN_IN} component={SignInPage} /> */}
              {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> */}
<<<<<<< HEAD
              <Route exact path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route path={ROUTES.PROFILE_SETTINGS} component={AccountPage} />
              <Route path={path.join("/job", ":id?")} component={ViewJob} />

              <Route path={path.join("/post", ":id?")} component={PostBoard} />
              {/* <Route path={ROUTES.REVIEWS} component={Rored} /> */}
              {/* <Route path={ROUTES.ADMIN} component={AdminPage} />   */}
              
            </div>
            <Footer/>
          </div>
          
=======
              <Route path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route path={ROUTES.PROFILE_SETTINGS} component={AccountPage} />
              <Route path={path.join("/job", ":id?")} component={ViewJob} />
              <Route path={ROUTES.REVIEWS} component={ReviewPage} />
              {/* <Route path={ROUTES.ADMIN} component={AdminPage} />   */}
            </div>
            <Footer />
          </div>
>>>>>>> parent of 8695466... Merge pull request #45 from beaubakken/master_deploy
        </Router>
      </AuthProvider>
    </div>
    
    /* // <footer className='footer'>
    //   <div className='container'>
    //     <h3>The page was made possible by Gator Delivery</h3>
    //   </div>
    // </footer>
    </div> */
  );
};
export default App;

