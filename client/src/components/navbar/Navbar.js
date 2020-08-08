import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignOutButton from "../sign-out";
import { AuthContext } from "../session/withAuthentication";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import {Button} from "react-bootstrap";
import "../index.css";
import { HelpOutline } from "@material-ui/icons";
import SignIn from "../sign-in";
//import "bootstrap/dist/css/bootstrap.min.css";

const Navbar1 = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    // <div className="header">
    //   {currentUser ? <NavAuth /> : <NavUnAuth />}
    // </div>
    <Navbar collapseOnSelect expand="lg" bg="primary" fixed="top" className="navbar-dark nav-fix">
      <Navbar.Brand href={currentUser ? ROUTES.HOME : ROUTES.LANDING}>Home Order</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/create" className="nav-text">Create Job</Nav.Link>
          <NavDropdown title="Social" id="collasible-nav-dropdown">
            <NavDropdown.Item href={ROUTES.REVIEWS}>Volunteer Reviews</NavDropdown.Item>
            <NavDropdown.Item href={ROUTES.COMMUNITY}>Community Board</NavDropdown.Item>
            <NavDropdown.Item href={ROUTES.FAQ}>FAQ</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href={ROUTES.CALENDAR} className="nav-text">Calendar</Nav.Link>
        </Nav>
        {currentUser ? <NavAuth /> : <NavUnAuth />}
      </Navbar.Collapse>
    </Navbar>
  );
};

const NavAuth = () => {
  const { currentUser } = useContext(AuthContext);
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
        <NavDropdown.Item href={ROUTES.ACCOUNT}>General Settings</NavDropdown.Item>
        <NavDropdown.Item href={ROUTES.PROFILE_SETTINGS}>Profile Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <SignOutButton />
      </NavDropdown>
    </Nav>
  );
  
}

const NavUnAuth = (props) => (
    <Nav>
      <Nav.Link href={ROUTES.SIGN_UP} className="signUp-text">Sign Up</Nav.Link>
      {/* <Nav.Link href={ROUTES.SIGN_IN} className="signIn-text">Sign In</Nav.Link> */}
      <SignIn />
    </Nav>
);

export default Navbar1;
