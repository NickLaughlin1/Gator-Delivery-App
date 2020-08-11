/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/*
 * This file loads the form for users to submit tasks.
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as firebase from "firebase/app";
import * as ROUTES from '../../constants/routes';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Success from '../success'
import moment from "moment-timezone";



const PopUp = (props) => {
  return(
                      <Modal show={props.show} onHide={props.handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                          <button className='btn btn-primary' onClick={props.handleClose}>
                            Close
                          </button>
                          <button className='btn btn-primary' onClick={props.handleClose}>
                            Save Changes
                          </button>
                        </Modal.Footer>
                      </Modal>
  );
};

//https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
const CreateTask = (props) => {
  

    const [currentStep, setCurrentStep] = useState(1);
    const [email, setEmail] = useState('');
    const [headline, setHeadline] = useState('');
    const [trade, setTrade] = useState('');
    const [task, setTask] = useState('');
    const [date, setDate] = useState(new Date());
    const [zip, setZip] = useState('');
    const [show, setShow] = useState(false)
    const [added, setAdded] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          //console.log("signed in");
          //console.log(user.email);
          setEmail(user.email);
          setCurrentStep(1);
        } 
      });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
      
        let newSubmission = {
            headline: headline,
            task: task,
            email: email,
            date: date,
            taken: false
        };
        //console.log(newSubmission);
        axios.post('/tasks/add', newSubmission); //may need to add the local host

        //window.location = ROUTES.HOME;
        setCurrentStep(0);
        setEmail('');
        setHeadline('');
        setTrade('');
        setTask('');
        setZip('');
        setDate(new Date());
        setAdded(true);
    };

  

    const _next = () => {
        let currStep = currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currStep = currStep >= 5 ? 5: currStep + 1
        setCurrentStep(currStep);
    };
        
    const _prev = () => {
        let currStep = currentStep
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currStep = currStep <= 1 ? 1: currStep - 1
        setCurrentStep(currStep);
    };

  const handleDateChange = (date) => setDate(date);

  // eslint-disable-next-line no-unused-vars
  const previousButton = () => {
    let currStep = currentStep;
    if (currStep !== 0) {
      return (
        <button className="btn btn-secondary" type="button" onClick={_prev}>
          Previous
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    let currStep = currentStep;
    if(currStep < 5 && currStep > 0) {
      return (
        <button 
          className="btn btn-danger btn-lg btn-block" 
          type="button" onClick={_next}>
            Next step
        </button>        
      );
    };
    return null;
  };

  return (
      <React.Fragment>
        <div className='form-container'>
          <h1>Post a job</h1>              
          <form onSubmit={handleSubmit}>
              <Step1 
              currentStep={currentStep} 
              setTrade={setTrade}
              trade={trade}
              />
              <Step2 
              currentStep={currentStep} 
              setTask={setTask}
              task={task}
              />
              <Step3
              currentStep={currentStep} 
              setHeadline={setHeadline}
              headline={headline}
              />
              <Step4
              currentStep={currentStep} 
              setZip={setZip}
              zip={zip}
              />
              <Step5 
              currentStep={currentStep} 
              setDate={handleDateChange}
              date={date}
              handleShow={handleShow}
              />
              <PopUp
                  show={show}
                  handleClose={handleClose}/>
              <Success
                added={added}
                />
              {nextButton()} 
          </form>
        </div>
      </React.Fragment>
  );
}

const Step1 = (props) => {
  if (props.currentStep < 1) {
    return null;
  }

  return (
    <div className="form-group card-question">

            
            <label for='select-trade'>What type of work do you need help with?</label>
            <OverlayTrigger trigger="hover" placement="right" overlay={
              <Popover id="popover-basic">
                <Popover.Content>
                  Choose the category that best describes the type of job you need completed. This will help with finding you the best volunteer who knows your type of job.
                </Popover.Content>
              </Popover>}>
              <div className='float-right'>
                
              <a className='btn btn-outline-info btn-sm'>Explain more</a>
              </div>
            </OverlayTrigger>
            <select
            className="custom-select"
            id="select-trade"
            name='select-trade'
            value={props.trade} 
            onChange={e => props.setTrade(e.target.value)}
            required='required'>
              <option selected disabled value=''>Choose a category</option>
              <option>Appliances</option>
              <option>Carpentry</option>
              <option>Driveway</option>
              <option>Electrical</option>
              <option>Fencing</option>
              <option>Flooring</option>
              <option>Gardening and Landscaping</option>
              <option>Guttering</option>
              <option>Handyman</option>
              <option>Heating and Air Conditioning</option>
              <option>Insulation</option>
              <option>Locksmith</option>
              <option>Painting and Decorating</option>
              <option>Plumbing</option>
              <option>Pool</option>
              <option>Pressure washing</option>
              <option>Roofing</option>  
              <option>Security Systems</option> 
              <option>Windows</option>
              <option>I'm not sure what to pick</option>
            </select>
            <div className='invalid-tooltip'>Please select an option</div>
          </div> 
  );
};

const Step2 = (props) => {
  if (props.currentStep < 2) {
    return null
  } 
  return(
    <div className='form-question card-question'>
    <div className="form-group">
      <label>Describe the job in detail</label>
        <OverlayTrigger trigger="hover" placement="right" overlay={
            <Popover id="popover-basic">
              <Popover.Content>
                Describe in as much detail as possible the job you need completed.
              </Popover.Content>
            </Popover>}>
          <div className='float-right'>
            <a className='btn btn-outline-info btn-sm'>Explain more</a>
          </div>
        </OverlayTrigger>
      <textarea
        className="form-control"
        id="task"
        name="task"
        type="text"
        placeholder="E.g. I need a new washing machine installed on the first floor, and the old washing machine disposed of."
        value={props.task}
        onChange={e => props.setTask(e.target.value)}
        required='required'
        />
    </div>
    </div>
  );
};

const Step3 = (props) => {
  if (props.currentStep < 3) {
    return null
  } 
  return(
    
    <div className="form-group card-question">
      <label>
        <div className='question'>Create a title for your job</div>
      </label>
      <OverlayTrigger trigger="hover" placement="right" overlay={
            <Popover id="popover-basic">
              <Popover.Content>
                Create a short title that summarizes the job you need completed. It should be about one sentence. This is what the volunteers will see first about your job.
              </Popover.Content>
            </Popover>}>
          <div className='float-right'>
            <a className='btn btn-outline-info btn-sm'>Explain more</a>
          </div>
        </OverlayTrigger>
      <input
        className="form-control"
        id="headline"
        name="headline"
        type="text"
        placeholder="E.g. New washing machine installed"
        value={props.headline}
        onChange={e => props.setHeadline(e.target.value)}
        required='required'
        />
    </div>
  );
};

const Step4 = (props) => {
  if (props.currentStep < 4) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group card-question">
      <label>What is your zipcode?</label>
      <OverlayTrigger trigger="hover" placement="right" overlay={
            <Popover id="popover-basic">
              <Popover.Content>
                Please provide your zipcode so we can find you volunteers in your area.
              </Popover.Content>
            </Popover>}>
          <div className='float-right'>
            <a className='btn btn-outline-info btn-sm'>Explain more</a>
          </div>
        </OverlayTrigger>
      <input
        className="form-control"
        id="zip"
        name="zip"
        placeholder="E.g. 32607"
        value={props.zip}
        onChange={e => props.setZip(e.target.value)}
        required='required'
        />  
    </div>
    </React.Fragment>
  );
};

const Step5 = (props) => {
  if (props.currentStep < 5) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group card-question">
      <label>When would you like the job done?</label>
      <div>
      <OverlayTrigger trigger="hover" placement="right" overlay={
            <Popover id="popover-basic">
              <Popover.Content>
                Choose the date that you would like your job to be completed.
              </Popover.Content>
            </Popover>}>
          <div className='float-right'>
            <a className='btn btn-outline-info btn-sm'>Explain more</a>
          </div>
        </OverlayTrigger>
      <DatePicker
        selected={props.date}
        onChange={props.setDate}
        required='required'   
      />   
    </div>
    </div>
    <button className="btn btn-success btn-block">Submit task</button>
    </React.Fragment>
  );
}

export default CreateTask;