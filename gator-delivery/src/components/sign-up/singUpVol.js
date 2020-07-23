/*
 * This is the page that volunteers are redirected too in order to finish 
 * signing up. This allows for us to record their profession/skills and 
 * any other information about their business (if they have one)
 */

//  TODO: Once user schema is created start to add skills, businessName, and businessWebsite to mongo

import React, {useState, useCallback} from 'react';
import {Link, withRouter} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SignUpVol = (props) => {

    const [isInvalid, setIsInvalid] = useState(true);
    const [skills, setSkills] = useState([]);
    const [businessName, setBusinessName] = useState('');
    const [businessWebsite, setBusinessWebsite] = useState('');

    // Makes the other options about entering business info disabled if person selects No to having a personal business
    const makeDisabled = (event) => {
        if(event.target.value === "No") {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
    }

    const handleVol = useCallback(async event => {
        event.preventDefault();
        const {skill, business, businessWeb} = event.target.elements;
        try {
            setSkills(skill);
            if(!isInvalid) {  //Makes sure that the user does have a business before trying to add it to their account
                setBusinessName(business);
                setBusinessWebsite(businessWeb);
            }
            props.history.push(ROUTES.HOME);
        } catch(error) {

        }

    }, [props.history, isInvalid]);

    return(
        <div>
            <h1>Volunteer Handyman Sign Up</h1>
            <form onSubmit={handleVol}>
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
                            disabled={isInvalid}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="business-website">Business website</label>
                        <input  
                            className="form-control"
                            name="website"
                            placeholder="(Optional)"
                            id="businessWeb"
                            disabled={isInvalid}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Finish Sign Up</button>
            </form>
        </div>
    )
}

export default withRouter(SignUpVol);