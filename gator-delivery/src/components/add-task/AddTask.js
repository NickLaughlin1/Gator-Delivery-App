import React, {useState} from 'react';

const AddTask = (props) => {

    const [name, setName] = useState('');
    const [task, setTask] = useState('');
    
    const createTask = (e) => {
        e.preventDefault();
        console.log("Submitted");

        let listing =  {
            name: name,
            task: task
        };
        console.log(listing);
    };
    
    return (
        <div>
        <form className="task-form" onSubmit={createTask}>
                <label for="name">Name</label>
                <input class="u-full-width" type="text" id="name" name="name" onChange={e => setName(e.target.value)}></input>
                <label for="task">Task</label>
                <textarea class="u-full-width" type="text" id="task" name="task" onChange={e => setTask(e.target.value)}></textarea>
                <button class="button-primary">Send your task</button>
        </form>
        
        </div>
        
        
    );

};

export default AddTask;