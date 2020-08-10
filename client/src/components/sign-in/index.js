import React, { useCallback, useContext, useState, useEffect } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";

//import { SignUpLink } from "../sign-up";
import { makeStyles } from "@material-ui/core/styles";
import {Modal, Container, Col} from "react-bootstrap";
import Button1 from "react-bootstrap/Button";
import * as ROUTES from "../../constants/routes";
import { AuthContext } from "../session/withAuthentication";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Email from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import {Icon} from "semantic-ui-react";
import InputAdornment from "@material-ui/core/InputAdornment";
import app from "../firebase/firebase";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import "../index.css";
import styles from "../../assets/jss/material-kit-react/views/loginPage.js";

const SignInPage = (props) => {
  
  return (
    // <div className="sign-in">
    //   {/* <h1>Login</h1> */}
    
    //   {/* This allows to still reach the sign up page even when trying to login */}
    // {/* </div> */}
    <>
    <Button1 variant="primary" onClick={() => props.setShowModal(true)}>
      Sign In
    </Button1>
    <SignInForm show={props.showModal} CloseSignIn={props.CloseSignIn} onHide={() => props.setShowModal(false)}/>
    </>
  );
}



const SignInForm = (props) => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const useStyles = makeStyles(styles);
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    try {
      const {email, password} = event.target.elements; //gets the email and password values
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
      window.location = ROUTES.HOME;
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <Card className={classes[cardAnimaton]}>
              <form className={classes.form} onSubmit={handleLogin}>
                <CardHeader color="info" className={classes.cardHeader}>
                  <h2>Login</h2>
                  <div className={classes.socialLine}>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={e => e.preventDefault()}
                    >
                      <Icon link name="google" />
                    </Button>
                  </div>
                </CardHeader>
                <p className={classes.divider}>Or Email and Password</p>
                <CardBody>
                  <CustomInput
                    name="email1"
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "email1",
                      // value: (email),
                      // onChange: (e) => printEmail(e),
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="pass"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "password",
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockIcon className={classes.inputIconsColor}>
                          </LockIcon>
                        </InputAdornment>
                      ),
                      autoComplete: "off"
                    }}
                  />
                  <p>
                    Don't have an account? <Link to="#" onClick={props.CloseSignIn}>Sign Up</Link>
                  </p>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="info" size="lg" type="submit">
                    Sign In
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </Modal>
  );
};

// export default withRouter(SignInLanding, SignInPage);
export default withRouter(SignInPage);
export { SignInForm };