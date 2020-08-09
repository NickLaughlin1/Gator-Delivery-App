import React, {useState} from "react";
import Button1 from "react-bootstrap/Button";
import {SignInForm} from "./index";

const SignInLanding = (props) => {
    const [showModal, setShowModal] = useState(false);
    // useEffect(() => {
    //   let isMounted = true;
    //   setShowModal(false).then(() => {
        
    //   })
    //   return () => {isMounted = false};
    // }, []);
    return (
      <>
      <Button1
        color="danger"
        size="lg"
        onClick={() => setShowModal(true)}
        // target={ROUTES.SIGN_IN}
        // rel="noopener noreferrer"
      >
        <i className="fas fa-play" />
        Get Started
      </Button1> 
      <SignInForm show={showModal} setShowModal={setShowModal} onHide={() => setShowModal(false)}/>
    </>
    );
  }

  export default SignInLanding;