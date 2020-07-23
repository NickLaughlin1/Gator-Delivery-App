/*
 * This file loads the form for users to submit tasks.
*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as firebase from "firebase/app";
import * as ROUTES from '../../constants/routes';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

//https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
const CreateTask = (props) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [email, setEmail] = useState('');
    const [headline, setHeadline] = useState('');
    const [task, setTask] = useState('');
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          //console.log("signed in");
          //console.log(user.email);
          setEmail(user.email);
        } 
      });
      }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
      
        let newSubmission = {
            headline: headline,
            task: task,
            email: email,
            date: date
        };
        //console.log(newSubmission);
        axios.post('http://localhost:5000/tasks/add', newSubmission);

        window.location = ROUTES.HOME;
        setCurrentStep(1);
        setEmail('');
        setHeadline('');
        setTask('');
        setDate(new Date());
    };

    const handleDateChange = date => setDate(date);

    const _next = () => {
        let currStep = currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currStep = currStep >= 3 ? 3: currStep + 1
        setCurrentStep(currStep);
    };
        
    const _prev = () => {
        let currStep = currentStep
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currStep = currStep <= 1 ? 1: currStep - 1
        setCurrentStep(currStep);
    };

    const previousButton = () => {
        let currStep = currentStep;
        if(currStep !== 0) {
          return (
            <button 
              className="btn btn-secondary" 
              type="button" onClick={_prev}>
                Previous
            </button>
          );
        };
        return null;
    }
      
    const nextButton = () => {
      let currStep = currentStep;
      if(currStep < 3) {
        return (
          <button 
            className="btn btn-primary float-right" 
            type="button" onClick={_next}>
              Continue
          </button>        
        );
      };
      return null;
    };

    return (
        <React.Fragment>
          <div className='container'>
            <h1>Task form</h1>              
            <form onSubmit={handleSubmit}>
                <Step1 
                currentStep={currentStep} 
                setHeadline={setHeadline}
                headline={headline}
                />
                <Step2 
                currentStep={currentStep} 
                setTask={setTask}
                task={task}
                />
                <Step3 
                currentStep={currentStep} 
                setDate={handleDateChange}
                date={date}
                />
              
                {nextButton()} 
            </form>
          </div>
        </React.Fragment>
    );

};



const Step1 = (props) => {
    if (props.currentStep < 1) {
        return null;
    }

    return (
        <div className="form-group">
            <label>Headline of task</label>
            <input
            className="form-control"
            id="headline"
            name="headline"
            type="text"
            placeholder="Ex. Install new washing machine and dispose of old one"
            value={props.headline} 
            onChange={e => props.setHeadline(e.target.value)} 
            />
          </div> 
    );
};

const Step2 = (props) => {
    if (props.currentStep < 2) {
      return null
    } 
    return(
      <div className="form-group">
        <label>Describe the task in detail</label>
        <input
          className="form-control"
          id="task"
          name="task"
          type="text"
          placeholder="I need a new washing machine installed on the first floor, and the old washing machine dispose of."
          value={props.task}
          onChange={e => props.setTask(e.target.value)}
          />
      </div>
    );
  };
  
const Step3 = (props) => {
    if (props.currentStep < 3) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
        <label>When would you like the task done?</label>
        <DatePicker
          selected={props.date}
          onChange={props.setDate}   
        />   
      </div>
      <button className="btn btn-success btn-block">Submit task</button>
      </React.Fragment>
    );
  };

export default CreateTask;