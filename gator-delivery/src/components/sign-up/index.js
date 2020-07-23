import React, {useCallback} from 'react';
import {Link, withRouter} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import app from '../firebase/firebase'


const SignUpPage = ({history}) => {
    // All of the possible variables that a user could provide
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {name, email, passwordOne, passwordTwo, addressOne, addressTwo, city, state, zip, role} = event.target.elements;
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, passwordOne.value).then((result) => {
                    const user = app.auth().currentUser;
                    return user.updateProfile({
                        displayName: name.value
                    });
                });
                console.log(role.value);
                if(role.value === 'volunteerH') {
                    console.log("hi");
                    history.push(ROUTES.SIGN_UP_VOL);
                } else {
                    history.push(ROUTES.HOME);
                }
        } catch (error) {
            alert(error);
        }
    }, [history]);

    // const isVolunteer = () => {
    //     history.push(ROUTES.SIGN_UP_VOL);
    // }

    // const isInvalid = 
    //     passwordOne !== passwordTwo ||
    //     passwordOne === '' ||
    //     email === '' ||
    //     name === '' ||
    //     addressOne === '' ||
    //     city === '' ||
    //     state === '' ||
    //     zip === '';

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp.bind(this)}>
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
                    <select id="inputRole" className="form-control" name="role" /*value={role} onChange={this.onChange}*/>
                        <option defaultValue>Chose role...</option>
                        <option value="cs">Regular Customer</option>
                        <option value="volunteerD">Volunteer Driver</option>
                        <option value="volunteerH">Volunteer Handyman</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>    
        </form>
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