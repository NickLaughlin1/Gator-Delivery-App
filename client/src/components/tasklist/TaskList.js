/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/*
 * This file lists all the currently listed tasks for the logged in user, with the newest one first.
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as firebase from "firebase/app";
import * as ROUTES from "../../constants/routes";

// Individual list components for each task
const Task = (props) => {
  return (
    <div>
      <div className="card-header bg-light card-head font-weight-bold">
        {props.task.headline}
      </div>
      <div className="card-body">
        <p className="card-title">{props.task.task}</p>
        <h5 className="card-text">
          Created on {props.task.createdAt.substring(0, 10)}
        </h5>
      </div>
    </div>
  );
};

const TaskList = (props) => {
  const [tasks, setTasks] = useState([]);
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);
  const [selectedID, setSelectedID] = useState("");

  // Runs only once. Gets current users email and sends get request to database for all listings
  // with that email
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //console.log("signed in");
        //console.log(user.email);
        setEmail(user.email);
        let url = "http://localhost:5000/tasks/";
        let search = url.concat(user.email);
        //console.log(email);
        //console.log(search);
        axios
          .get(search)
          .then((response) => {
            let asc_task = response.data;
            let des_task = asc_task.reverse(); // Show newest tasks first
            setTasks(des_task);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, []);

    // Runs only once. Gets current users email and sends get request to database for all listings
    // with that email
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
            //console.log("signed in");
            //console.log(user.email);
            setEmail(user.email);
            let url = '/tasks/';
            let search = url.concat(user.email);
            //console.log(email);
            //console.log(search);
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
    

    return (
        <div className='table-wrapper'>
            <div className='posted-jobs_list'>
                <List 
                    tasks={tasks} 
                    editing={editing} 
                    setEditing={setEditing}
                    selectedID={selectedID}
                    setSelectedID={setSelectedID} 
                />
            </div>
        </div>
    );

  return (
    <div>
      <ul className="posted-jobs_list">
        <List
          tasks={tasks}
          editing={editing}
          setEditing={setEditing}
          selectedID={selectedID}
          setSelectedID={setSelectedID}
        />
      </ul>
    </div>
  );
};

const List = (props) => {
    console.log(props.tasks);
    if (props.tasks.length === 0) {
        console.log("here");
        return (
            <p>No jobs posted</p>
        )

    } else {
        return props.tasks.map(currtask => {
            return (
                <div className='card mb-3'>
                    
                        <Task task={currtask} key={currtask._id}/>
                        <div className='card-body text-left'>
                            <Link to={
                                {
                                    pathname: '/job/' + currtask._id,
                                    id: currtask._id
                                }
                            } className="nav-link">
                                <button type="button" className="btn btn-success btn-sm float-right" onClick={() => {props.setSelectedID(currtask._id)}}>View job</button>
                            </Link>
                        </div>
                    
                </div>
            );
        });
    }
};

/*const Edit = (props) => {
    console.log("made into editing");
    console.log(props.editing);
    if (props.ID !== props.selectedID) {
        return null;
    }
    return (
        <div>
            <p>Editing option chosen</p>
        </div>
    );
}*/

export default TaskList;