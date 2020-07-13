import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

// Initial state of the Sign Up info
const INITIAL_STATE = {
    name: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  }
const [signUpInfo, setSignUpInfo] = useState(INITIAL_STATE);

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);

// Handles all the sign up information
const SignUpForm = (props) => {
    let state = {INITIAL_STATE};
    let onSubmit = event => {
        
    };

    let onChange = event => {
        setSignUpInfo({[event.target.name]: event.target.value});
    };

    return(
        <form onSubmit={onSubmit.bind(this)}>

        </form>
    );
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

export default SignUpPage;

export {SignUpForm, SignUpLink};