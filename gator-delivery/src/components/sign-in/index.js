import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { SignUpLink } from "../sign-up";
import * as ROUTES from "../../constants/routes";
import { AuthContext } from "../session/withAuthentication";
import app from "../firebase/firebase";

const SignInPage = () => (
  <div>
    <h1>Login</h1>
    <SignInForm />
    <SignUpLink />{" "}
    {/* This allows to still reach the sign up page even when trying to login */}
  </div>
);

const SignInForm = ({ history }) => {
  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    // these variable bind to the names given to the input boxes
    const { email, password } = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
      //history.push(ROUTES.LANDING);
    } catch (error) {
      alert(error);
    }
  }, []);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to={ROUTES.HOME} />;
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <input
            name="email"
            //value={email}
            type="email"
            placeholder="Email Address"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <input
            name="password"
            //value={password}
            type="password"
            placeholder="Password"
            className="form-control"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default withRouter(SignInPage);
export { SignInForm };
