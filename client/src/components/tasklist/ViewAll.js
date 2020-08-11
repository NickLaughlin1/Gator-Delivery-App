import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from 'react-bootstrap/Modal'

const PopUp = (props) => {
    return(
      <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
             <Modal.Title>Accept job</Modal.Title>
           </Modal.Header>
           <Modal.Body>Are you sure you want to accept this job?</Modal.Body>
           <Modal.Footer>
              <button className='btn btn-secondary' onClick={props.handleClose}>
                  Close
               </button>
                <button className='btn btn-success' onClick={()=>props.handleAccept(props.t)}>
                    Yes, accept this job
                </button>
            </Modal.Footer>
    </Modal>
    );
  };

// Individual list components for each task
const Task = (props) => {

  return (
    <div>
      <div className="card-header bg-light card-head font-weight-bold">
        {props.task.headline}
      </div>
      <div className="card-body">
        <p className="card-title">{props.task.task}</p>
        <h6 className="card-text lower">
          Date to be fufilled {props.task.date.substring(0, 10)}
        </h6>
      </div>
    </div>
  );
};

const ViewAll = (props) => {
  const [tasks, setTasks] = useState([]);
  const [selectedID, setSelectedID] = useState('');
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  // Runs only once. Gets current users email and sends get request to database for all listings
  // with that email
  useEffect(() => {
    
      
        //console.log("signed in");
        //console.log(user.email);
        
        let url = "/tasks/";
        
        //console.log(email);
        //console.log(search);
        axios
          .get(url)
          .then((response) => {
            let asc_task = response.data;
            let des_task = asc_task.reverse(); // Show newest tasks first
            setTasks(des_task);
          })
          .catch((error) => {
            console.log(error);
          });
      
    
  }, []);

    // Runs only once. Gets current users email and sends get request to database for all listings
    // with that email
  

    // Create a row for each task 
    const handleAccept = (t) => {
        handleClose();

        console.log(t.ID);
        let url = '/tasks/';
        let search = url.concat(t.ID);

        let newSubmission = {
            headline: t.headline,
            task: t.task,
            date: t.date,
            taken: true
        };

        axios.put(search,newSubmission)
            .then(res => {
                console.log("MADE IT HERE");
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <div className='table-wrapper'>
            <div className='posted-jobs_list'>
                <List 
                    tasks={tasks} 
                    show={show}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    setSelectedID={setSelectedID}
                    handleAccept={handleAccept}
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
            let t = {
                ID: currtask._id,
                headline: currtask.headline,
                task: currtask.task,
                date: currtask.date,
            };
            return (
                <div className='card mb-3'>
                    
                        <Task task={currtask} key={currtask._id}/>
                        <button type="button" className="btn btn-success btn-sm float-right" onClick={props.handleShow}>Accept job</button>
                        <PopUp
                            show={props.show}
                            handleAccept={props.handleAccept}
                            handleClose={props.handleClose}
                            ID={currtask._id}
                            t={t}/>
                </div>
            );
        });
    }
};

export default ViewAll;