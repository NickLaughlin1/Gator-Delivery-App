import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { AuthContext } from "../session/withAuthentication";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import {Button} from "react-bootstrap";
import "../index.css";
import { HelpOutline } from "@material-ui/icons";
import SignIn from "../sign-in";
import SignUp from "../sign-up";
//import "bootstrap/dist/css/bootstrap.min.css";

const Navbar1 = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    // <div className="header">
    //   {currentUser ? <NavAuth /> : <NavUnAuth />}
    // </div>
    <Navbar collapseOnSelect expand="lg" bg="primary" fixed="top" className="navbar-dark nav-fix" style={{height: "5.5vh"}}>
      <Link to={currentUser ? ROUTES.HOME : ROUTES.LANDING}>
        <Navbar.Brand>Home Order</Navbar.Brand>
      </Link>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {currentUser &&
          <>
            <Link to="/create" className="nav-link nav-text">
            {/* <Nav.Link className="nav-text">Create Job</Nav.Link> */}
              Create Job
            </Link>
            <NavDropdown title="Social" id="collasible-nav-dropdown">
            <NavDropdown.Item tag={Link} /*href={ROUTES.REVIEWS}*/>
              <Link to={ROUTES.REVIEWS} className="drp-text">
                Volunteer Reviews
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item tag={Link}>
              <Link to={ROUTES.COMMUNITY} className="drp-text">
                Community Board
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item tag={Link}>
              <Link to={ROUTES.FAQ} className="drp-text">
                FAQ
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link to={ROUTES.CALENDAR} className="nav-text nav-link">
            Calendar
          </Link>
          </>}
          
          {/* <Nav.Link tag={Link} href={ROUTES.CALENDAR} className="nav-text">Calendar</Nav.Link> */}
        </Nav>
        {currentUser ? <NavAuth /> : <NavUnAuth />}
      </Navbar.Collapse>
    </Navbar>
  );
};

const NavAuth = (props) => {
  const { currentUser, SignOut } = useContext(AuthContext);
  const handleSignOut = () => {
    try {
      SignOut();
      // Makes sure the person gets back to the landing page after logout
      //history.push(ROUTES.LANDING);
      console.log("done");
    } catch (error) {
        alert(error);
    } 
  };
  return (
    <>
    
    
    <Nav>
      <Navbar.Text className="user-text">
        Hello, {currentUser.displayName}!
      </Navbar.Text>
      <NavDropdown title={
        <img
          src="https://cdn0.iconfinder.com/data/icons/basic-user-interface-6/100/account-512.png"
          className="profile-pic"
        />
        } id="collasible-nav-dropdown" alignRight>
        
        {/* <NavDropdown.Item>
          <Link to={ROUTES.ACCOUNT} className="drp-text">
            General Settings
          </Link>
        </NavDropdown.Item> */}
        <NavDropdown.Item>
          <Link to={ROUTES.ACCOUNT} className="drp-text">
            Account Settings
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item tag={Link} onClick={handleSignOut} href={ROUTES.LANDING}>
          Sign Out
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    </>
  );
  
}

const NavUnAuth = (props) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const CloseSignUp = () => { // Closes the Sign Up modal and shows the sign in modal 
    setShowSignUp(false);
    setShowModal(true);
  }
  
  const CloseSignIn = () => { // Closes the Sign In modal and shows the sign up modal
    setShowModal(false);
    setShowSignUp(true);
  }
  return (
    <Nav>
      {/* <Nav.Link href={ROUTES.SIGN_UP} className="signUp-text">Sign Up</Nav.Link> */}
      {/* <Nav.Link href={ROUTES.SIGN_IN} className="signIn-text">Sign In</Nav.Link> */}
      <SignIn showSignUp={showSignUp} showModal={showModal} setShowSignUp={setShowSignUp} setShowModal={setShowModal} CloseSignIn={CloseSignIn}/>
      <SignUp showSignUp={showSignUp} showModal={showModal} setShowSignUp={setShowSignUp} setShowModal={setShowModal} CloseSignUp={CloseSignUp}/>
    </Nav>
  );
}

export default Navbar1;
