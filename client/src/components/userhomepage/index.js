import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as firebase from "firebase/app";
import * as ROUTES from '../../constants/routes';
import Home from '../home'

const UserHomePage = (props) => {
    const [added, setAdded] = useState(false);
    const handleAdded = () => setAdded(true);
    const handleNotAdded = () => setAdded(false);

    //const [show, setShow] = useState(false);
    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    return (
        <Home
        handleAdded={handleAdded}
        handleNotAdded={handleNotAdded}
        />
    );
};

export default UserHomePage;