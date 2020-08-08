import React, { useContext, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { AuthContext } from "../session/withAuthentication";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "../index.css";
import SignIn from "../sign-in/index";
// import LoginPage from "../../views/LoginPage/LoginPage";
import app from "../firebase";
//import "bootstrap/dist/css/bootstrap.min.css";

const Navbar1 = ({history}) => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" fixed="top" className="navbar-dark nav-fix">
      <Link to={currentUser ? ROUTES.HOME : ROUTES.LANDING}>
        <Navbar.Brand>Home Order</Navbar.Brand>
      </Link>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
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
          {/* <Nav.Link tag={Link} href={ROUTES.CALENDAR} className="nav-text">Calendar</Nav.Link> */}
        </Nav>
        {currentUser ? <NavAuth user={user} setUser={setUser}/> : <NavUnAuth />}
      </Navbar.Collapse>
    </Navbar>
  );
};

const NavAuth = (props) => {
  const { currentUser } = useContext(AuthContext);
  const handleSignOut = () => {
    try {
      console.log("signout");
      app.auth().signOut();
      props.setUser(null);
      // Makes sure the person gets back to the landing page after logout
      //history.push(ROUTES.LANDING);
      console.log("done");
    } catch (error) {
        alert(error);
    } 
  };
  return (
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
        <NavDropdown.Item tag={Link} href={ROUTES.ACCOUNT}>General Settings</NavDropdown.Item>
        <NavDropdown.Item tag={Link} href={ROUTES.PROFILE_SETTINGS}>Profile Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item tag={Link} onClick={handleSignOut} href={ROUTES.LANDING}>
          Sign Out
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
  
}

const NavUnAuth = (props) => (
    <Nav>
      <Nav.Link href={ROUTES.SIGN_UP} className="signUp-text">Sign Up</Nav.Link>
      {/* <Nav.Link href={ROUTES.SIGN_IN} className="signIn-text">Sign In</Nav.Link> */}
      <SignIn />
      {/* <LoginPage /> */}
    </Nav>
);

export default withRouter(Navbar1);
