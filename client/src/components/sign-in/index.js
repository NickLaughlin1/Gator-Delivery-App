import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { SignUpLink } from "../sign-up";
import {Modal, Button} from "react-bootstrap";
import * as ROUTES from "../../constants/routes";
import { AuthContext } from "../session/withAuthentication";
import app from "../firebase/firebase";
import "../index.css";

const SignInPage = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    // <div className="sign-in">
    //   {/* <h1>Login</h1> */}
    
    //   {/* This allows to still reach the sign up page even when trying to login */}
    // {/* </div> */}
    <>
    <Button variant="primary" onClick={() => setShowModal(true)}>Sign In</Button>
    <SignInForm setShowModal={setShowModal} show={showModal} onHide={() => setShowModal(false)}/>
    </>
  );
}

const SignInLanding = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <Button
      color="danger"
      size="lg"
      onChange={() => setShowModal(true)}
      // target={ROUTES.SIGN_IN}
      // rel="noopener noreferrer"
    >
      <i className="fas fa-play" />
      Get Started
    </Button> 
    <SignInForm setShowModal={setShowModal} show={showModal} onHide={() => setShowModal(false)}/>
  </>
  );
}

const SignInForm = (props) => {
  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    // these variable bind to the names given to the input boxes
    const { email, password } = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  }, []);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to={ROUTES.HOME} />;
  }

  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <SignUpLink setShowModal={props.setShowModal}/>{" "}
      </Modal.Footer>
    </Modal>
    
  );
};

export default withRouter(SignInPage, SignInLanding);
export { SignInForm };
