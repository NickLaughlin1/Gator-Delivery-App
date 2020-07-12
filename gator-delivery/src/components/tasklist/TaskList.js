import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

    useEffect(() => {
        axios.get('http://localhost:5000/tasks/')
            .then(response => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

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