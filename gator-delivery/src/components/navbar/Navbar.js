import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Home Order</Link>
            <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">   
                    <li className="navbar-item">
                        <Link to="/list" className="nav-link">View Tasks</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/community" className="nav-link">Community Board</Link>
                    </li>
                </ul>
            </div>
        </nav>
        
        
    );

};

export default Navbar;