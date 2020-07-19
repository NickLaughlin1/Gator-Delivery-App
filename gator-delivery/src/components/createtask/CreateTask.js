/*
 * This file loads the form for users to submit tasks.
*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as firebase from "firebase/app";
import * as ROUTES from '../../constants/routes';

//https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
const CreateTask = (props) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
            name: username,
            task: password,
            email: email
        };
        //console.log(newSubmission);
        axios.post('http://localhost:5000/tasks/add', newSubmission);

        window.location = ROUTES.HOME;
        setCurrentStep(1);
        setEmail('');
        setUsername('');
        setPassword('');
    };

    const _next = () => {
        let currStep = currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currStep = currStep >= 2 ? 3: currStep + 1
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
        if(currStep !== 1) {
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
                Next
            </button>        
          );
        };
        return null;
      };

    return (
        <React.Fragment>
            <h1>A Wizard Form!</h1>
            <p>Step {currentStep} </p>                
            <form onSubmit={handleSubmit}>
                <Step1 
                currentStep={currentStep} 
                setEmail={setEmail}
                email={email}
                />
                <Step2 
                currentStep={currentStep} 
                setUsername={setUsername}
                username={username}
                />
                <Step3 
                currentStep={currentStep} 
                setPassword={setPassword}
                password={password}
                />
                {previousButton()}
                {nextButton()} 
            </form>
        </React.Fragment>
    );

};



const Step1 = (props) => {
    if (props.currentStep !== 1) {
        return null;
    }

    return (
      <h3>you will be submitting a task</h3>
        /*<div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={props.email} // Prop: The email input data
            onChange={e => props.setEmail(e.target.value)} // Prop: Puts data into state
            />
          </div> */
         
    );
};

const Step2 = (props) => {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-group">
        <label htmlFor="username">Name</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter name"
          value={props.username}
          onChange={e => props.setUsername(e.target.value)}
          />
      </div>
    );
  };
  
const Step3 = (props) => {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
        <label htmlFor="password">Task</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="text"
          placeholder="Enter task"
          value={props.password}
          onChange={e => props.setPassword(e.target.value)}
          />      
      </div>
      <button className="btn btn-success btn-block">Submit task</button>
      </React.Fragment>
    );
  };

export default CreateTask;