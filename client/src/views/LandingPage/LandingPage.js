import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import SignUpLanding from "../../components/sign-up/index.js";
import {SignInForm} from "../../components/sign-in/index.js";

import * as ROUTES from "../../constants/routes";

import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const [isLanding, setIsLanding] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const CloseSignUp = () => {
    setShowSignUp(false);
    setShowModal(true);
  }
  const CloseSignIn = () => { // Closes the Sign In modal and shows the sign up modal
    setShowModal(false);
    setShowSignUp(true);
  }
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Parallax filter image={require("../../assets/img/bg-image.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Home Order</h1>
              <h4>
                Welcome to Home Order! To get help for home projects from our
                local volunteers click the Get Started button right below!{" "}
              </h4>
              <br />
              
                {/* <Button
                  color="danger"
                  size="lg"
                  target={ROUTES.SIGN_IN}
                  // rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Get Started
                </Button> */}
                <SignUpLanding isLanding={isLanding} showSignUp={showSignUp} showModal={showModal} setShowSignUp={setShowSignUp} setShowModal={setShowModal} CloseSignUp={CloseSignUp}/>
                <SignInForm show={showModal} CloseSignIn={CloseSignIn} onHide={() => setShowModal(false)}/>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
