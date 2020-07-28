import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import EventAvailable from "@material-ui/icons/EventAvailable";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What is Home Order?</h2>
          <h5 className={classes.description}>
            Home order is a service that allows volunteers to help people in
            their communities with a variety of repairs and house projects. Not
            sure what exactly you need done? Head over to the community board
            and ask members from your local communities for help!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Community Board"
              description="Don't know what exactly you need done or what materials you need for your project/repair? Ask other Home Order users and volunteers any questions you may have!"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Volunteers"
              description="All of our volunteers are skilled in their selected craft and are here to help others in their communty!"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Choose When You're Available"
              description="When creating a post for help you can choose exactly when you want a volunteer to come out and help!"
              icon={EventAvailable}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
