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
                    <Link to="/calendar" className="lonk">Calendar</Link>
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
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm stick-top">
        <Link to="/" className="navbar-brand">Home Order</Link>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                {/* <li className="navbar-item">
                    <Link to="/" className="nav-link">View Tasks</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Task</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/community" className="nav-link">Community Board</Link>
                </li>
                <li className="navbar-item">
					<Link to="/calendar" className="nav-link">Calendar</Link>
				</li>
                <li>
                    <Link to={ROUTES.SIGN_IN} className="nav-link">Login</Link>
                </li>
                <li>
                    <Link to={ROUTES.SIGN_UP} className="nav-link">Sign Up</Link>
                </li> */}
            <div className="dropdown">
                <button className="dropbtn">Social</button>
                <div className="dropdown-content">
                    <a href="/reviews">Volunteer Reviews</a>
                    <a href="/community">Community Board</a>
                    <a href="/faq">FAQ</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Tasks</button>
                <div className="dropdown-content">
                    <a href="/create">Create Task</a>
                    <a href="/">View Tasks</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Calendar</button>
                <div className="dropdown-content">
                    <a href="/calendar">Calendar</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Create Account</button>
                <div className="dropdown-content">
                    <a href="/signin">Sign-In</a>
                    <a href="/signup">Sign-Up</a>
                </div>
            </div>
            </ul>
        </div>
    </nav>
)


export default Navbar;        
