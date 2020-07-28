import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../sign-out';
import {AuthContext} from '../session/withAuthentication';
import app from '../firebase/firebase'


const Navbar = () => {
    const {currentUser} = useContext(AuthContext);
    return(
        <div className='header'>
            {currentUser ? <NavAuth /> : <NavUnAuth />}
            {console.log(currentUser)}
        </div>
    );
};

const NavAuth = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg navbar-fixed-top">
        <div className='container'>
        <a className='navbar-brand' href={ROUTES.HOME}> Home Order</a>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                    <Link to="/create" className="nav-link">
                        <button type='button' className='btn btn-light'>Create Job</button>
                    </Link>
                <div class="dropdown">
                    <button class="dropbtn">Social</button>
                    <div class="dropdown-content">
                        <a href="/reviews">Volunteer Reviews</a>
                        <a href="/community">Community Board</a>
                        <a href="/faq">FAQ</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">User Account</button>
                    <div class="dropdown-content">
                        <a href="/settings/general">Control Panel</a>
                        <a href="/settings/profile">Edit Profile</a>
                    </div>
                </div>
                <div class="dropdown">
                    <Link to="/calendar" class="lonk">Calendar</Link>
                </div>
            </ul>
            <span className="navbar-text">Hello, {app.auth().currentUser.displayName}!</span> {/* shows the logged in users name */}
            <li className="navbar-text">
                <SignOutButton className='btn btn-light'/>
            </li>
        </div>
        </div>
    </nav>
);

const NavUnAuth = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-sm stick-top">
        <div className='container'>
        <a className='navbar-brand' href={ROUTES.HOME}> Home Order</a>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <Link to="/create" className="nav-link">
                    <button type='button' className='btn btn-light'>Create Job</button>
                </Link>
            <div class="dropdown">
                <button class="dropbtn">Social</button>
                <div class="dropdown-content">
                    <a href="/reviews">Volunteer Reviews</a>
                    <a href="/community">Community Board</a>
                    <a href="/faq">FAQ</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Calendar</button>
                <div class="dropdown-content">
                    <a href="/calendar">Calendar</a>
                </div>
            </div>
            
            </ul>
            <div class="dropdown">
                <button class="dropbtn">Account</button>
                <div class="dropdown-content">
                    <a href="/signin">Sign-In</a>
                    <a href="/signup">Sign-Up</a>
                </div>
            </div>
        </div>
        </div>
    </nav>
)


export default Navbar;        
