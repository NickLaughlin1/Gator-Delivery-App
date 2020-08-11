/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/*
 * This file lists all the currently listed tasks for the logged in user, with the newest one first.
 */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as firebase from "firebase/app";


// Individual list components for each task
const Task = (props) => {

  const convert = (d) => {
    let day1 = d.substring(8,9);
    let day2 = d.substring(9,10);
    let day = Number(day2);
    if (day1 === '1') {
        day = day + 10;
    } else if (day1 === '2') {
        day = day + 20;
    };
    //console.log('LAST DIGIT', day);
    if (day === 1) {
        day = 31;
    } else {
        day = day - 1;
    };
    let nnew = day.toString();
    //console.log(nnew);
    if (nnew.length === 1) {
        let z = '0';
        nnew = z.concat(day);
    }
    let yearmonth = d.substring(0,8);
    let newdate = yearmonth.concat(nnew);
    //console.log(newdate);
    return newdate;
};

  return (
    <div>
      <div className="card-header bg-light card-head font-weight-bold">
        {props.task.headline}
      </div>
      <div className="card-body">
        <p className="card-title">{props.task.task}</p>
        <h6 className="card-text lower">
          Created on {props.task.createdAt.substring(0, 10)}
        </h6>
        <div className='task-taken'>Volunteer Accepted? {props.task.taken ? <h6>Taken</h6> : <h6>No</h6>}</div>
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
<<<<<<< HEAD
<<<<<<< HEAD
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
};

const List = (props) => {
    //console.log(props.tasks);
    if (props.tasks.length === 0) {
        //console.log("here");
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
=======
=======

  // Create a row for each task

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
    return <p>No jobs posted</p>;
  } else {
    return props.tasks.map((currtask) => {
      return (
        <div className="card mb-3">
          <Task task={currtask} key={currtask._id} />
          <div className="card-body text-left">
            <Link
              to={{
                pathname: "/job/" + currtask._id,
                id: currtask._id,
              }}
              className="nav-link"
            >
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={() => {
                  props.setSelectedID(currtask._id);
                }}
              >
                View job
              </button>
            </Link>
          </div>
        </div>
      );
    });
  }
};
>>>>>>> parent of 8695466... Merge pull request #45 from beaubakken/master_deploy

  // Create a row for each task

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
    return <p>No jobs posted</p>;
  } else {
    return props.tasks.map((currtask) => {
      return (
        <div className="card mb-3">
          <Task task={currtask} key={currtask._id} />
          <div className="card-body text-left">
            <Link
              to={{
                pathname: "/job/" + currtask._id,
                id: currtask._id,
              }}
              className="nav-link"
            >
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={() => {
                  props.setSelectedID(currtask._id);
                }}
              >
                View job
              </button>
            </Link>
          </div>
        </div>
      );
    });
  }
>>>>>>> parent of 8695466... Merge pull request #45 from beaubakken/master_deploy
};

export default TaskList;
