import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignOutButton from "../sign-out";
import { AuthContext } from "../session/withAuthentication";
import "../index.css";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="header">
      {currentUser ? <NavAuth /> : <NavUnAuth />}
      {console.log(currentUser)}
    </div>
  );
};

const NavAuth = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg navbar-fixed-top">
      <div className="container">
        <a className="navbar-brand" href={ROUTES.HOME}>
          {" "}
          Home Order
        </a>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <Link to="/create" className="nav-link">
              <button type="button" className="btn btn-light">
                Create Job
              </button>
            </Link>
            <div className="dropdown">
              <button className="dropbtn">Social</button>
              <div className="dropdown-content">
                <a href="/reviews">Volunteer Reviews</a>
                <a href="/community">Community Board</a>
                <a href="/faq">FAQ</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">User Account</button>
              <div className="dropdown-content">
                <a href="/settings/general">Control Panel</a>
                <a href="/settings/profile">Edit Profile</a>
              </div>
            </div>
            <div className="dropdown">
              <Link to="/calendar" class="lonk">
                Calendar
              </Link>
            </div>
          </ul>
          <span className="navbar-text">Hello, {currentUser.displayName}!</span>{" "}
          {/* shows the logged in users name */}
          <div className="dropdown">
            <button
              className="btn btn-default dropdown-toggle"
              type="button"
              id="account-pic"
            >
              <img
                src="https://cdn0.iconfinder.com/data/icons/basic-user-interface-6/100/account-512.png"
                className="profile-pic"
              />
              <div className="dropdown-content">
                <a href="/settings/general">Control Panel</a>
                <a href="/settings/profile">Edit Profile</a>
                <SignOutButton />
              </div>
            </button>
          </div>
          <li className="navbar-text"></li>
        </div>
      </div>
    </nav>
  );
};

const NavUnAuth = () => (
  <nav
    className="navbar navbar-dark bg-primary navbar-expand-sm navbar-fixed-top"
    fixed
  >
    <div className="container">
      <a className="navbar-brand" href={ROUTES.LANDING}>
        {" "}
        Home Order
      </a>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <Link to="/create" className="nav-link">
            <button type="button" className="btn btn-light">
              Create Job
            </button>
          </Link>
          <div className="dropdown">
            <button className="dropbtn">Social</button>
            <div className="dropdown-content">
              <a href="/reviews">Volunteer Reviews</a>
              <a href="/community">Community Board</a>
              <a href="/faq">FAQ</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Calendar</button>
            <div className="dropdown-content">
              <a href="/calendar">Calendar</a>
            </div>
          </div>
        </ul>
        <div className="dropdown">
          <button className="dropbtn">Account</button>
          <div className="dropdown-content">
            <a href="/signin">Sign-In</a>
            <a href="/signup">Sign-Up</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
