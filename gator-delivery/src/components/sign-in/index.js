import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';

import {SignUpLink} from '../sign-up';
import {withFirebase} from '../firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
    <div>
        <h1>Login</h1>
        <SignInForm />
        <SignUpLink />  {/* This allows to still reach the sign up page even when trying to login */}
    </div>
);

// Creates an initial state of the email & password for this user
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email, password} = this.state;
        // Calls the sign in function in the firebase API
        this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({...INITIAL_STATE});
            // this.props.history.push(ROUTES.HOME); // Makes the user go back to the home page
            window.location = '/';
            console.log(window.location);
        }).catch(error => {
            this.setState({error}); // Basic error handling
        });

        event.preventDefault(); // Makes sure the page doesn't refresh
    }

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, password, error} = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="email"
                        placeholder="Email Address"
                        className="form-control"
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <input
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        />
                    </div>
                </div>
                <button disabled={isInvalid} type="submit" className="btn btn-primary">Login</button>
            </form>
        );
    };
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

export default SignInPage;
export {SignInForm};