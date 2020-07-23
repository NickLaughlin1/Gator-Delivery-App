import React from "react";
import app from "../firebase";
import {withRouter} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SignOutButton = ({history}) => {
    const handleSignOut = () => {
        try {
            app.auth().signOut();
            history.push(ROUTES.LANDING)
        } catch (error) {
            alert(error);
        } 
    };

    return (
    <button type="button" onClick={handleSignOut.bind(this)}>
         Sign Out
     </button>
    )
}

export default withRouter(SignOutButton);