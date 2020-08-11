import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as firebase from "firebase/app";
import * as ROUTES from '../../constants/routes';
import Modal from 'react-bootstrap/Modal'
import DatePicker from 'react-datepicker';

const PopUp = (props) => {
    return(
      <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
             <Modal.Title>Delete job</Modal.Title>
           </Modal.Header>
           <Modal.Body>Are you sure you want to delete this job?</Modal.Body>
           <Modal.Footer>
              <button className='btn btn-secondary' onClick={props.handleClose}>
                  Close
               </button>
                <button className='btn btn-danger' onClick={props.handleDelete}>
                    Yes, delete this job
                </button>
            </Modal.Footer>
    </Modal>
    );
  };

const PopUp1 = (props) => {
    return(
      <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
             <Modal.Title>Edit job</Modal.Title>
           </Modal.Header>
           <Modal.Body>Do you want to save your changes to your job?</Modal.Body>
           <Modal.Footer>
              <button className='btn btn-secondary' onClick={props.handleClose}>
                  No
               </button>
                <button className='btn btn-success' onClick={props.handleSubmit}>
                    Yes, save changes
                </button>
            </Modal.Footer>
    </Modal>
    );
};

const ViewJob = (props) => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [headline, setHeadline] = useState('');
    const [date, setDate] = useState(new Date());
    const [datestring, setDatestring] = useState('');
    const [freshdate, setFreshdate] = useState(new Date());
    const [created, setCreated] = useState('');
    const [email, setEmail] = useState('');
    const [editing, setEditing] = useState(false);
    const [taskID, setTaskID] = useState(props.location.id);
    //const [editing, setEditing] = useState(false);
    //const [selectedID, setSelectedID] = useState('');
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    ;

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
                let tasks_list = response.data;
                let curr_task = tasks_list.filter(t => t._id === props.location.id);
                console.log('DATE TO BE COMPLETED: ', curr_task[0].date.substring(0,10));
                setTaskID(props.location.id);
                setHeadline(curr_task[0].headline);
                setTask(curr_task[0].task);
                setDatestring(curr_task[0].date.substring(0,10));
                setCreated(curr_task[0].createdAt.substring(0,10));
                //let newdate = curr_task[0].createdAt
                //setFreshdate(newdate);
                setDate(curr_task[0].date.toDate());
                
            })
            .catch((error) => {
                console.log(error);
            })
            } 
        });
    }, []);

    //console.log("THis is task ID", taskID);

    const handleDelete = (e) => {
        //e.preventDefault();

        handleClose();

        let ID = taskID;
        let url = '/tasks/';
        let search = url.concat(ID);
        console.log('SERACH TERM:',search);
      
        axios.delete(search)
            .then(res => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            })

        window.location = ROUTES.DELETE;
       
        //props.setShow(true);

        setEmail('');
        setHeadline('');
        setTasks([]);
        setTask('');
        setDatestring('');
        setDate(new Date());
        setCreated('');
    };

    const handleEdit = (e) => {
        let ID = props.location.id;
        let url = '/tasks/';
        let search = url.concat(ID);

        setEditing(true);
    };

    const handleDateChange = date => {
        let newdate = date.toString();
        console.log('IN DATE CHANGE: ', newdate.substring(0,10));    
             
        setDate(date);
        setDatestring(newdate.substring(0,10));
    };

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
        let yearmonth = datestring.substring(0,8);
        let newdate = yearmonth.concat(nnew);
        //console.log(newdate);
        return newdate;
    };

    
    return (
        <div className='container1 page'>
            <div className='content'>
                <div className='row'>
                    
                    <div className='viewjob-header'>
                        <div className='mb-panel'>
                            <h3 className='card-title'>{headline}</h3>
                            <h5 className='card-text'>Created on {created}</h5>
                        </div>
                    </div>
                    <div className='layout-sidebar'>
                        <div className='mb-panel'>
                            <div className='mb-panel-header'>
                                <div className='mb-row1'> 
                                    <a href='#' onClick={()=>{handleEdit()}} >Edit job</a>
                                </div>
                                <div className='mb-row2'>
                                    <a href='#' onClick={handleShow}>Delete job</a>
                                    <PopUp
                                        show={show}
                                        handleDelete={handleDelete}
                                        handleClose={handleClose}/>
                                </div>
                                <div className='mb-row2'>      
                                        <a href={ROUTES.HOME}>View my other jobs</a>                 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='layout-content'>
                        <div className='mb-panel'>
                            <Display
                                editing={editing}
                                task={task}
                                datestring={datestring}
                                convert={convert}
                            />
                            <Editing
                                editing={editing}
                                setEditing={setEditing}
                                handleEdit={handleEdit}
                                headline={headline}
                                setHeadline={setHeadline}
                                task={task}
                                ID={taskID}
                                datestring={datestring}
                                date={date}
                                setDate={handleDateChange}
                                setDatestring={setDatestring}
                                task={task}
                                setTask={setTask}
                            />
                        </div>
                    
                    </div>
                </div>
              
            </div>
         
        </div>
      
  );
};

const Display = (props) => {
    if (props.editing === true) {
        return null;
    }

    return (
        <div className='card mb-3'>
            <div className='card-header bg-light card-head font-weight-bold'>Job description</div>
            <div className='card-body'>
                <p className='card-title'>{props.task}</p> 
                <p className='card-title'>Date to be completed: {props.datestring}</p> 
            </div>
        </div>
    );
};

const Editing = (props) => {
   
    if (props.editing === false) {
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('NEW SET DATE: ', props.date);

        let newSubmission = {
            headline: props.headline,
            task: props.task,
            email: props.email,
            date: props.date
        };
        //console.log(newSubmission);
        //axios.put('/tasks/', newSubmission);

        

        let id = props.ID;
        let url = '/tasks/';
        let search = url.concat(id);
        //console.log(search);
      
        axios.put(search,newSubmission)
            .then(res => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            })

            props.setEditing(false);
            //props.setDatestring('');
            //props.setDate(new Date());
    };

    

    return (
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="headline">Headline</label>
                <input className="form-control" id="headline" value={props.headline} onChange={e => props.setHeadline(e.target.value)}></input>
            </div>
            <div class="form-group">
                <label for="taskBody">Task details</label>
                <input className="form-control" id="taskBody" value={props.task} onChange={e => props.setTask(e.target.value)}></input>
            </div>
            <React.Fragment>
            <div className="form-group card-question">
                <label>When would you like the job done?</label>
                <div>
                    <DatePicker
                        selected={props.date}
                        onChange={props.setDate}
                    />   
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </React.Fragment>  
            
        </form>
    );
};

export default ViewJob;