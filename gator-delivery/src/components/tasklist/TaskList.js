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
        <tr>
            <td>{props.task.name}</td>
            <td>{props.task.task}</td>
        </tr>
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
            <h3>Logged Tasks</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    { TaskList() }
                </tbody>
            </table>
        </div>
    );

};

export default TaskList;