import React, {useState} from 'react';
import axios from 'axios';

const CreateTask = (props) => {

    const [name, setName] = useState('');
    const [task, setTask] = useState('');
    
    const createTask = (e) => {
        e.preventDefault();
        let newtask = {
            name: name,
            task: task
        };
        //console.log(newtask);
        //props.taskAdd(newtask);

        axios.post('http://localhost:5000/tasks/add', newtask);
            
        
        window.location = '/';
        setName('');
        setTask('');
    };

    return (
        
        <div>
            <h1>Post a job</h1>
            <form onSubmit={createTask}>
                <div className="form-group">
                <label>Name</label>
                    <input type='text'
                        required
                        className="form-control"
                        value={name} 
                        onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Task</label>
                    <input type='text'
                        required
                        className="form-control"
                        value={task} 
                        onChange={e => setTask(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Task" className="btn btn-primary" />
                </div>
            </form>
        </div>
        
    );

};

export default CreateTask;