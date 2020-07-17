import React from "react";
import app from "../firebase";
import {withRouter} from 'react-router-dom';

const SignOutButton = () => {
    const handleSignOut = () => {
        try {
            app.auth().signOut();
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