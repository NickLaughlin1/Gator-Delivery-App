import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as firebase from "firebase/app";
import * as ROUTES from '../../constants/routes';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom';

const Delete = (props) => {
    if (props.added === false) {
        return null;
    }

    return(
        <div className='form-container'>
            <h2 className='suc-header'>Your job has succesfully been deleted.</h2> 
            <h4>Your job will no longer be visible to volunteers.</h4>
            <Link to={ROUTES.HOME} className="nav-link lower">
                <button className='btn btn-success btn-lg btn-block'>View My posted jobs</button>
            </Link>
        </div>
    );
};

export default Delete;