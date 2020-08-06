import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as firebase from "firebase/app";
import * as ROUTES from '../../constants/routes';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom';

const Success = (props) => {
    if (props.added === false) {
        return null;
    }

    return(
        <div>
            <p>SUCCESS</p>
            <Link to={ROUTES.HOME} className="nav-link">
                <button className='btn btn-primary btn-lg btn-block'>View my jobs</button>
            </Link>
        </div>
    );
};

export default Success;