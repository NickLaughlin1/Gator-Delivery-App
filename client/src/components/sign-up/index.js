/* eslint-disable react/prop-types */
import React, { useState } from "react";
import clsx from 'clsx';
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {Modal} from "react-bootstrap";
import Button1 from "react-bootstrap/Button";
// import { AuthContext } from "../session/withAuthentication";
// import CustomInput from "../../components/CustomInput/CustomInput.js";
import {useFormik} from 'formik';
import Email from "@material-ui/icons/Email";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";
import "../index.css";
import styles from "../../assets/jss/material-kit-react/views/loginPage.js";
import "../index.css";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import HomeIcon from '@material-ui/icons/Home';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PinDropIcon from '@material-ui/icons/PinDrop';
import BuildIcon from '@material-ui/icons/Build';
import BusinessIcon from '@material-ui/icons/Business';
import WebIcon from '@material-ui/icons/Web';

import * as ROUTES from "../../constants/routes";
import app from "../firebase/firebase";
import { SettingsVoiceOutlined, FormatStrikethroughRounded } from "@material-ui/icons";

const SignUpPage = (props) => {
  return (
    <>
    <Button1 variant="primary" onClick={() => props.setShowSignUp(true)}>
    {props.isLanding ? "Get Started" : "Sign Up"}
    </Button1>
    <NormalSignUp
     show={props.showSignUp} 
     //setShowSignUp={props.setShowSignUp} 
     onHide={() => props.setShowSignUp(false)}
     CloseSignUp={props.CloseSignUp}
     
    />
    </>
    
  );
};

const NormalSignUp = (props) => {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [isClicked, setIsClicked] = useState(false);
  const [isVol, setVol] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPasswrod] = useState('');
  
  const [user, setUserValues] = useState({
    name: '',
    email: '',
    passwordOne: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: '',
    role: '',
    skills: '',
    businessName: '',
    businessWebsite: '',
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: 'notARealPassword',
      addressOne: '',
      addressTwo: '',
      city: '',
      state: '',
      zip: '',
      role: '',
      skills: '',
      businessName: '',
      businessWebsite: '',
    },
    onSubmit: values => {
      
      SignIn(values);
    }
  })
  const useStyles = makeStyles(styles);
  // Css themes that are easily accessable 
  const formStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '48ch',
    },
    addressField: {
      width: '48ch',
    },
    cityField: {
      width: '48ch',
    },
    stateZipField: {
      width: '22.7ch',
    },
    businessField: {
      width: '31.25ch',
    }
  }));
  const states = [
    {
      value: '',
      lable: 'Choose State...'
    },
    {
      value: 'AL',
      label: 'Alabama'
    },
    {
      value: 'AK',
      label: 'Alaska'
    },
    {
      value: 'AZ',
      label: 'Arizona'
    },
    {
      value: 'AR',
      label: 'Arkansas'
    },
    {
      value: 'CA',
      label: 'California'
    },
    {
      value: 'CO',
      label: 'Colorado'
    },
    {
      value: 'CT',
      label: 'Connecticut'
    },
    {
      value: 'DE',
      label: 'Delaware'
    },
    {
      value: 'FL',
      label: 'Florida'
    },
    {
      value: 'GA',
      label: 'Georgia'
    },
    {
      value: 'HI',
      label: 'Hawaii'
    },
    {
      value: 'ID',
      label: 'Idaho'
    },
    {
      value: 'IL',
      label: 'Illinois'
    },
    {
      value: 'IA',
      label: 'Indiana'
    },
    {
      value: 'IO',
      label: 'Iowa'
    },
    {
      value: 'KS',
      label: 'Kansas'
    },
    {
      value: 'KY',
      label: 'Kentucky'
    },
    {
      value: 'LA',
      label: 'Louisiana'
    },
    {
      value: 'ME',
      label: 'Maine'
    },
    {
      value: 'MD',
      label: 'Maryland'
    },
    {
      value: 'MA',
      label: 'Massachusetts'
    },
    {
      value: 'MI',
      label: 'Michigan'
    },
    {
      value: 'MN',
      label: 'Minnesota'
    },
    {
      value: 'MS',
      label: 'Mississippi'
    },
    {
      value: 'MO',
      label: 'Missouri'
    },
    {
      value: 'MT',
      label: 'Montana'
    },
    {
      value: 'NE',
      label: 'Nebraska'
    },
    {
      value: 'NV',
      label: 'Nevada'
    },
    {
      value: 'NH',
      label: 'New Hampshire'
    },
    {
      value: 'NJ',
      label: 'New Jersey'
    },
    {
      value: 'NM',
      label: 'New Mexico'
    },
    {
      value: 'NY',
      label: 'New York'
    },
    {
      value: 'NC',
      label: 'North Carolina'
    },
    {
      value: 'ND',
      label: 'North Dakota'
    },
    {
      value: 'OH',
      label: 'Ohio'
    },
    {
      value: 'OK',
      label: 'Oklahoma'
    },
    {
      value: 'OR',
      label: 'Oregon'
    },
    {
      value: 'PA',
      label: 'Pennsylvania'
    },
    {
      value: 'PR',
      label: 'Puerto Rico'
    },
    {
      value: 'RI',
      label: 'Rhode Island'
    },
    {
      value: 'SC',
      label: 'South Carolina'
    },
    {
      value: 'SD',
      label: 'South Dakota'
    },
    {
      value: 'TN',
      label: 'Tennessee'
    },
    {
      value: 'TX',
      label: 'Texas'
    },
    {
      value: 'UT',
      label: 'Utah'
    },
    {
      value: 'VT',
      label: 'Vermont'
    },
    {
      value: 'VA',
      label: 'Virginia'
    },
    {
      value: 'WA',
      label: 'Washington'
    },
    {
      value: 'WV',
      label: 'West Virginia'
    },
    {
      value: 'WI',
      label: 'Wisconsin'
    },
    {
      value: 'WY',
      label: 'Wyoming'
    },
  ];
  const userRoles = [
    {
      value: '',
      label: 'Choose Role',
      disabled: true,
    },
    {
      value: 'Regular Customer',
      label: 'Regular Customer',
      disabled: false,
    },
    {
      value: 'Volunteer Handyman',
      label: 'Volunteer Handyman',
      disabled: false,
    },
  ];
  const userSkills = [
    {
      value: 'Carpentry',
      label: 'Carpentry',
    },
    {
      value: 'Electrical',
      label: 'Electrical',
    },
    {
      value: 'Fencing',
      label: 'Fencing',
    },
    {
      value: 'Heating and Air',
      label: 'Heating and Air',
    },
    {
      value: 'Driveway',
      label: 'Driveway',
    },
    {
      value: 'Flooring',
      label: 'Flooring'
    },
    {
      value: 'Guttering',
      label: 'Guttering',
    },
    {
      value: 'Handyman',
      label: 'Handyman',
    },
    {
      value: 'Insulation',
      label: 'Insulation',
    },
    {
      value: 'Painting and Decorating',
      label: 'Painting and Decorating',
    },
    {
      value: 'Appliances',
      label: 'Appliances',
    },
    {
      value: 'Security Systems',
      label: 'Security Systems',
    },
    {
      value: 'Plumbing',
      label: 'Plumbing',
    },
    {
      value: 'Roofing',
      label: 'Roofing',
    },
    {
      value: 'Windows',
      label: 'Windows',
    },
    {
      value: 'Pool',
      label: 'Pool',
    },
    {
      value: 'Gardening and Landscaping',
      label: 'Gardening and Landscaping',
    },
    
  ]

  const SignIn = async (newUser) => {
    try {
      // This is so a volunteer user account isn't created before finishing the signup
      
      await app
        .auth()
        .createUserWithEmailAndPassword(newUser.email, password)
        .then(async (result) => {
          const user = await app.auth().currentUser;
          axios.post("/users/create", newUser);
          return user.updateProfile({
            displayName: newUser.name,
          });
          
        });      
      window.location = ROUTES.HOME;
    } catch (error) {
      alert(error);
    }
  };
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const newClasses = formStyles();


  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <Card className={classes[cardAnimaton]}>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <CardHeader color="info" className={classes.cardHeader}>
                <h2>Sign Up</h2>
                <div className={classes.socialLine}> 
                  
                <p>Already have an account? <Link to="#" onClick={() => props.CloseSignUp(false)}>Sign in here!</Link></p>
              </div>
              </CardHeader>
              <p className={classes.divider}>Sign Up to get help from local volunteers. Want to be a volunteer? Choose a volunteer role when signing up!</p>
              <CardBody>
              <GridItem>
                <div className={newClasses.root}>
                  <div>
                    <FormControl className={clsx(newClasses.margin, newClasses.textField)}>
                      <InputLabel htmlFor="standard-adornment-name">Full Name *</InputLabel>
                      <Input
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        required={true}
                        endAdornment={
                          <InputAdornment position="end">
                            <AccountCircle>
                            </AccountCircle>
                          </InputAdornment>
                        }
                        aria-describedby="standard-user-helper-text"
                        inputProps={{
                          'aria-label': 'Full Name',
                        }}
                      />
                    </FormControl>
                    <FormControl className={clsx(newClasses.margin, newClasses.textField)}>
                      <InputLabel htmlFor="standard-adornment-email">Email *</InputLabel>
                      <Input
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        required={true}
                        endAdornment={
                          <InputAdornment position="end">
                            <Email />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                  <div>
                  <FormControl className={clsx(newClasses.margin, newClasses.textField)}>
                      <InputLabel htmlFor="standard-adornment-password">Password *</InputLabel>
                      <Input
                        id="password"
                        value={password}
                        onChange={(e) => setPasswrod(e.target.value)}
                        required={true}
                        inputProps={{
                          type: "password",
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <LockIcon />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    <FormControl className={clsx(newClasses.margin, newClasses.textField)}>
                      <InputLabel htmlFor="standard-adornment-password">Confirm Password *</InputLabel>
                      <Input
                        name="passwordTwo"
                        id="standard-adornment-passwordTwo"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required={true}
                        inputProps={{
                          type: "password",
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <LockIcon />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                  <div>
                    <FormControl className={clsx(newClasses.margin, newClasses.textField)}>
                      <InputLabel htmlFor="standard-adornment-addressOne">Address *</InputLabel>
                      <Input
                        id="addressOne"
                        name="addressOne"
                        value={formik.values.addressOne}
                        onChange={formik.handleChange}
                        required={true}
                        endAdornment={
                          <InputAdornment position="end">
                            <HomeIcon />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                  <div>
                    <FormControl className={clsx(newClasses.margin, newClasses.textField)}>
                      <InputLabel htmlFor="standard-adornment-addressOne">Address 2</InputLabel>
                      <Input
                        id="addressTwo"
                        name="addressTwo"
                        value={formik.values.addressTwo}
                        onChange={formik.handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <HomeIcon />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                  <div>
                    <FormControl className={clsx(newClasses.margin, newClasses.cityField)}>
                      <InputLabel htmlFor="standard-adornment-city">City</InputLabel>
                      <Input
                        name="city"
                        id="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <LocationCityIcon />
                          </InputAdornment>
                        }
                      />
                    </FormControl >
                    <FormControl className={clsx(newClasses.margin, newClasses.stateZipField)}>
                      <TextField
                        name="state"
                        id="state"
                        select
                        label="State"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        required={true}
                        SelectProps={{
                          // native: true,
                        }}>
                          {states.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                      </TextField>
                    </FormControl>
                    <FormControl className={clsx(newClasses.margin, newClasses.stateZipField)}>
                      <InputLabel htmlFor="standard-adornment-zip">Zip Code *</InputLabel>
                      <Input
                        name="zip"
                        id="zip"
                        value={formik.values.zip}
                        onChange={formik.handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <PinDropIcon />
                          </InputAdornment>
                        }
                      />
                    </FormControl >
                  </div>
                  <div>
                    <FormControl className={clsx(newClasses.margin, newClasses.cityField)}>
                      <TextField
                        name="role"
                        id="role"
                        select
                        label="Role"
                        value={formik.values.role}
                        onChange={formik.handleChange}
                        required={true}
                        SelectProps={{
                          // native: true,
                        }}
                      >
                        {userRoles.map((option1) => (
                          <MenuItem key={option1.value} value={option1.value} disabled={option1.disabled}>
                            {option1.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  
                    {formik.values.role === "Volunteer Handyman" && 
                      //Checks to see what role the user is and will display this if user is selects handyman
                      <>
                        <FormControl className={clsx(newClasses.margin, newClasses.cityField)}>
                          <TextField
                            name="skills"
                            id="skills"
                            select
                            label="Skills"
                            value={formik.values.skills}
                            onChange={formik.handleChange}
                            SelectProps={{
                              // native: true,
                            }}
                          >
                            {userSkills.map((option2) => (
                              <MenuItem key={option2.value} value={option2.value} disabled={option2.disabled}>
                                {option2.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </FormControl>
                        <div>
                          <FormControl className={clsx(newClasses.margin, newClasses.businessField)}>
                            <FormLabel component="legend" required={true} /*disabled={checkVol}*/>Do You Own a Business?</FormLabel>
                            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                              <FormControlLabel
                                value="yes"
                                control={<Radio color="primary" />}
                                label="Yes"
                                //labelPlacement="top"
                                //disabled={checkVol}
                              />
                              <FormControlLabel
                                value="no"
                                control={<Radio color="primary" />}
                                label="No"
                                //labelPlacement="top"
                                //disabled={checkVol}
                              />
                            </RadioGroup>
                          </FormControl>
                          <FormControl className={clsx(newClasses.margin, newClasses.businessField)}>
                            <InputLabel htmlFor="standard-adornment-businessName">Business Name</InputLabel>
                            <Input
                              id="businessName"
                              name="businessName"
                              value={formik.values.businessName}
                              onChange={formik.handleChange}
                              endAdornment={
                                <InputAdornment position="end">
                                  <BusinessIcon />
                                </InputAdornment>
                              }
                            />
                          </FormControl>
                          <FormControl className={clsx(newClasses.margin, newClasses.businessField)}>
                            <InputLabel htmlFor="standard-adornment-businessWebsite">Business Website</InputLabel>
                            <Input
                              id="businessWebsite"
                              name="businessWebsite"
                              value={formik.values.businessWebsite}
                              onChange={formik.handleChange}
                              endAdornment={
                                <InputAdornment position="end">
                                  <WebIcon />
                                </InputAdornment>
                              }
                            />
                          </FormControl>
                        </div>
                        </> 
                    }
                  </div>
                </div>
                </GridItem>
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <Button simple color="info" size="lg" type="submit">
                  Sign Up
                </Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </Modal>
  );
};

export default withRouter(SignUpPage);
//export { SignUpLink };