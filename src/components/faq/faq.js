import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import app from '../firebase/firebase'

const faq = () => {

return(  
<div class = "faqprofile">
  <h1>Frequently Asked Questions</h1>
        <h3>Q: How do I place an order?</h3>
        <h5>A: If you click the button above that says "Create Job" it will walk you through the process
            of posting a job.
        </h5>
    <br></br>
        <h3>Q: How do I become a volunteer if I'm already signed up?</h3>
        <h5>A: If you go into your <Link to={ROUTES.ACCOUNT}>Account</Link>, you can 
        update any personal information you need as well as change member type between "Volunteer" and "Customer" </h5>
    <br></br>
        <h3>Q: Do you store all my information that goes into the sign-up?</h3>
        <h5>A: No, the only information that is stored is your username for verification of a valid account.</h5>
    <br></br>
        <h3>Q: This is my first time using Home Order, are there any reviews I can see of current volunteers?</h3>
        <h5>A: You can actually check them out on the <Link to={ROUTES.REVIEWS}>reviews</Link> section. </h5>
    <br></br>
        <h3>Q: I've never done any home projects before, can Home Order help me figure out what I need?</h3>
        <h5>A: Yes, if you go to our <Link to={ROUTES.COMMUNITY}>community board</Link> you can ask get help from 
        both volunteers and other people to narrow down what you may need.</h5>

  </div>
);
}

export default faq;