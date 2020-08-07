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
      <Navbar.Brand href={currentUser ? ROUTES.HOME : ROUTES.LANDING}>Home Order</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/create" className="nav-text">Create Job</Nav.Link>
          <NavDropdown title="Social" id="collasible-nav-dropdown">
            <NavDropdown.Item tag={Link} href={ROUTES.REVIEWS}>Volunteer Reviews</NavDropdown.Item>
            <NavDropdown.Item tag={Link} href={ROUTES.COMMUNITY}>Community Board</NavDropdown.Item>
            <NavDropdown.Item tag={Link} href={ROUTES.FAQ}>FAQ</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link tag={Link} href={ROUTES.CALENDAR} className="nav-text">Calendar</Nav.Link>
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
      <Navbar.Text className="nav-text">
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
