import React, {useCallback, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import app from '../firebase/firebase'


const SignUpPage = (props) => {
    const [isInvalid, setIsInvalid] = useState(true);
    const [skills, setSkills] = useState([]);
    const [businessName, setBusinessName] = useState('');
    const [businessWebsite, setBusinessWebsite] = useState('');
    const [currentStep, setCurrentStep] = useState(1);
    const [isVol, setVol] = useState('');

    // handles everything that happens on signup
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {name, email, passwordOne, passwordTwo, addressOne, addressTwo, city, state, zip, role} = event.target.elements;
        try {
            // This is so a volunteer user account isn't created before finishing the signup
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, passwordOne.value).then((result) => {
                const user = app.auth().currentUser;
                return user.updateProfile({
                    displayName: name.value
                });
            });
            console.log(role.value);
            props.history.push(ROUTES.HOME);
            
        } catch (error) {
            alert(error);
        }
    }, [props.history]);

    const _next = () => {
        let tempStep = currentStep;
        // If the current step is 1, then add one to it
        tempStep = tempStep >= 2 ? 2: tempStep + 1;
        setCurrentStep(tempStep);
    }

    const nextButton = () => {
        let tempStep = currentStep;
        if(tempStep < 2) {
            return (
                <button 
                    className="btn btn-primary"
                    type="button"
                    onClick={_next}>
                    Continue
                </button>
            );
        };
        return null;
    }

    return (
        <React.Fragment>
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <NormalSignUp currentStep={currentStep} setVol={setVol} isVol={isVol}/>
                    <SignUpVol currentStep={currentStep} setIsInvalid={setIsInvalid} isInvalid={isInvalid}/>
                    {nextButton()}
                </form>
            </div>
        </React.Fragment>
    );
};

const NormalSignUp = (props) => {
    if(props.currentStep < 1) {
        return null;
    }
    const checkVol = (e) => {
        const {isVolunteer} = e.target.value;
        props.setVol(isVolunteer);
        if(props.isVol === 'volunteerH') {
            props.setCurrentStep(2);
        }
        
    }

    return (
        <div>            
            <div className="form-group">
                <label htmlFor="inputName">Name *</label>
                <input
                name="name"
                //value={name}
                //onChange={this.onChange}
                type="text"
                placeholder="Full Name"
                className="form-control"
                id="inputName"
                />
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail4">Email *</label>
                <input
                name="email"
                //value={email}
                //onChange={this.onChange}
                type="email"
                placeholder="Email Address"
                className="form-control"
                id="inputEmail4"
                />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password *</label>
                    <input
                    name="passwordOne"
                    //value={passwordOne}
                    //onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    id="inputPassword4"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword5">Confirm Password *</label>
                    <input
                    name="passwordTwo"
                    //value={passwordTwo}
                    //onChange={this.onChange}
                    type="password"
                    placeholder="Re-enter Password"
                    className="form-control"
                    id="inputPassword5"
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress1">Address *</label>
                <input
                name="addressOne"
                //value={addressOne}
                //onChange={this.onChange}
                type="text"
                placeholder="1234 Main St"
                className="form-control"
                id="inputAddress1"
                />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input
                name="addressTwo"
                //value={addressTwo}
                //onChange={this.onChange}
                type="text"
                placeholder="Apartment, studio, or floor"
                className="form-control"
                id="inputAddress2"
                />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City *</label>
                    <input 
                    name="city"
                    //value={city}
                    //onChange={this.onChange}
                    type="text" 
                    className="form-control" 
                    id="inputCity"
                    />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State *</label>
                    <select id="inputState" className="form-control" name="state" /*value={state} onChange={this.onChange}*/>
                        <option defaultValue>Choose...</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip *</label>
                    <input 
                    name="zip"
                    //value={zip}
                    //onChange={this.onChange}
                    type="text" 
                    className="form-control" 
                    id="inputZip"
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputRole">User Role *</label>
                    <select id="inputRole" className="form-control" name="role" /*value={role}*/ onChange={checkVol}>
                        <option defaultValue>Chose role...</option>
                        <option value="cs">Regular Customer</option>
                        <option value="volunteerD">Volunteer Driver</option>
                        <option value="volunteerH">Volunteer Handyman</option>
                    </select>
                </div>
            </div>
            
    </div>
    )
};


const SignUpVol = (props) => {
    // Makes sure the extra volunteer info doesn't need to be shown if the user isn't a volunteer
    if(props.currentStep < 2) {
        return null;
    }

    

    // Makes the other options about entering business info disabled if person selects No to having a personal business
    const makeDisabled = (event) => {
        if(event.target.value === "No") {
            props.setIsInvalid(true);
        } else {
            props.setIsInvalid(false);
        }
    }

    return(
        <div>
            <div className="form-row">
                <div className="form-group col-md-2">
                    <label htmlFor="inputSkill">Skill *</label>
                    <select id="inputSkill" className="form-control" name="skill">
                        <option defaultValue>Choose Skill...</option>
                    </select>
                </div>
            </div>
            <div className="form-row">
                <label htmlFor="option1 option2">Do you have a personal business? *</label>
            </div>
            <div className="form-check form-check-inline">
                <input 
                    className="form-check-input" 
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadioYes"
                    value="Yes"
                    onChange={makeDisabled}
                />
                <label className="form-check-lable" htmlFor="inlineRadioYes">Yes</label>
            </div>
            <div className="form-check form-check-inline">
                <input 
                    className="form-check-input" 
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadioNo"
                    value="No"
                    onChange={makeDisabled}
                />
                <label className="form-check-lable" htmlFor="inlineRadioYes">No</label>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="business-name">Name of Business</label>
                    <input
                        name="business"
                        type="text"
                        placeholder="(Optional)"
                        className="form-control"
                        id="business"
                        disabled={props.isInvalid}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="business-website">Business website</label>
                    <input  
                        className="form-control"
                        name="website"
                        placeholder="(Optional)"
                        id="businessWeb"
                        disabled={props.isInvalid}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Finish Sign Up</button>
        </div>
    )
}

// Gives users a link to sign up if they do not have an accoutn already
const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

export default withRouter(SignUpPage);
export {SignUpLink};