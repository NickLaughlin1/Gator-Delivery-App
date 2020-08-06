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
        <div className='success'>
            <h2 className='suc-header'>You have succesffuly submitted a job!</h2> 
            <h4>We will notify volunteers in your area of your recent post, and you should check back here to see when a volunteer chooses your job!</h4>
            <Link to={ROUTES.HOME} className="nav-link lower">
                <button className='btn btn-success btn-lg btn-block'>View My posted jobs</button>
            </Link>
        </div>
    );
};

export default Success;