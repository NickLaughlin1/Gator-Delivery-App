import React from 'react';

const FirebaseContext = React.createContext(null);

// This is a higher-order component and this will make it simple to interact with firebase using this
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

export default FirebaseContext;