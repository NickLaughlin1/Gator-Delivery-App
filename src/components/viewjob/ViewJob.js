import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as firebase from "firebase/app";
import * as ROUTES from '../../constants/routes';

const ViewJob = (props) => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [headline, setHeadline] = useState('');
    const [date, setDate] = useState(new Date());
    const [created, setCreated] = useState('');
    const [email, setEmail] = useState('');
    //const [editing, setEditing] = useState(false);
    //const [selectedID, setSelectedID] = useState('');

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
            //console.log("signed in");
            //console.log(user.email);
            setEmail(user.email);
            let url = 'http://localhost:5000/tasks/';
            let search = url.concat(user.email);
            //console.log(email);
            //console.log(search);
            axios.get(search)
            .then(response => {
                let tasks_list = response.data;
                let curr_task = tasks_list.filter(t => t._id === props.location.id);
                //console.log(curr_task[0].task);
                setHeadline(curr_task[0].headline);
                setTask(curr_task[0].task);
                setDate(curr_task[0].date);
                setCreated(curr_task[0].createdAt.substring(0,10));
                
            })
            .catch((error) => {
                console.log(error);
            })
            } 
        });
    }, []);

    const handleDelete = (e) => {
        //e.preventDefault();

        let ID = props.location.id;
        let url = 'http://localhost:5000/tasks/';
        let search = url.concat(ID);
        console.log(search);
      
        axios.delete(search)
            .then(res => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
        
            

        console.log('###########');

        window.location = ROUTES.HOME;
       
        setEmail('');
        setHeadline('');
        setTasks([]);
        setTask('');
        setDate(new Date());
        setCreated('');
    };

    return (
        <div className='container page'>
            <div className='content'>
                <div className='row'>
                    <div className='viewjob-header'>
                        <div className='mb-panel'>
                            <h3 className='card-title'>{headline}</h3>
                            <h5 className='card-text'>Created on {created}</h5>
                        </div>
                    </div>
                    <div className='edit-sidebar'>
                        <div className='mb-panel'>
                            <div className='mb-panel-header'>
                                <p className='cont-body'>Edit job</p>
                                <a href='#' onClick={()=>{handleDelete()}} >Delete job</a>
                            </div>
                        </div>
                    </div>
                    <div className='viewjob-main'>
                        <div className='mb-panel'>
                            <div className='card mb-3'>
                                <div className='card-header bg-light card-head font-weight-bold'>Job description</div>
                                <div className='card-body'>
                                    <p className='card-title'>{task}</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ViewJob;