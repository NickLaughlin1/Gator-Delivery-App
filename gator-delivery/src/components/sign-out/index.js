import React from 'react';

import {withFirebase} from '../firebase';

const onClick = (firebase) => {
    firebase.doSignOut();
    //window.location = '/';
}

const SignOutButton = ({firebase}) => (
    <button type="button" onClick={onClick(firebase)}>
        Sign Out
    </button>
);

export default withFirebase(SignOutButton);