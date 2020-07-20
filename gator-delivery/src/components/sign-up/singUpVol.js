import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const SignUpVol = ({history}) => {
    const handleVol = () => {

    }
    return(
        <div>
            <h1>Volunteer Sign Up</h1>
            <form onSubmit={handleVol}>

            </form>
        </div>
    )
}

export default withRouter(SignUpVol);