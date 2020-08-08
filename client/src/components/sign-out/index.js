import React from "react";
import app from "../firebase";
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SignOutButton = ({history}) => {
    const handleSignOut = () => {
        try {
            app.auth().signOut();
            history.push(ROUTES.LANDING); // Makes sure the person gets back to the landing page after logout
        } catch (error) {
            alert(error);
        } 
    };

    return (
    <button type="button" className="btn btn-primary" onClick={handleSignOut.bind(this)}>
         Sign Out
     </button>
    )
}

export default withRouter(SignOutButton);