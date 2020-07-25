/*
 * This file lists all the currently listed tasks for the logged in user, with the newest one first.
 */
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as firebase from "firebase/app";

// Individual list components for each task
const Task =(props) => {
    return (
        <div className='card mb-3'>
            <div className='card-header bg-light'>{props.task.headline}</div>
            <div className='card-body'>
                <h5 className='card-title'>Created on {props.task.createdAt.substring(0,10)}</h5>
                <p className='card-text'>{props.task.task}</p>
            </div>

        
        </div>
    );
};

const TaskList = (props) => {

    const [tasks, setTasks] = useState([]);
    const [email, setEmail] = useState('');

    // Runs only once. Gets current users email and sends get request to database for all listings
    // with that email
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
            console.log("signed in");
            console.log(user.email);
            setEmail(user.email);
            let url = 'http://localhost:5000/tasks/';
            let search = url.concat(user.email);
            //console.log(email);
            console.log(search);
            axios.get(search)
            .then(response => {
                let asc_task = response.data;
                let des_task = asc_task.reverse(); // Show newest tasks first
                setTasks(des_task);
            })
            .catch((error) => {
                console.log(error);
            })
            } 
        });
    }, []);

    // Create a row for each task 
    const TaskList = () => {
        return tasks.map(currtask => {
            return <Task task={currtask} key={currtask._id}/>;
        });
    };

    return (
        <div>
            <ul className='posted-jobs_list'>
                { TaskList() }
            </ul>
        </div>
    );

};

export default TaskList;