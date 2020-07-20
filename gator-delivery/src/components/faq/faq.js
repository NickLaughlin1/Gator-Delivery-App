import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import app from '../firebase/firebase'

const faq = () => {

return(  
<div class = "faqprofile">
  <h1>Frequently Asked Questions</h1>
        <h3>Q: Does your site work?</h3>
        <h5>A: Yes, like a charm</h5>
    <br></br>
        <h3>Q: How do I become a volunteer if I'm already signed up?</h3>
        <h5>A: If you locate the tab at the top of your screen that says "User Account" and select "Edit Profile", you can
            update any personal information you need as well as change member type between Volunteer or Customer </h5>
    <br></br>
        <h3>Q: Do you store all my information that goes into the sign-up?</h3>
        <h5>A: No, the primary verification needed is simply your username for verification of a valid account</h5>
    <br></br>
        <h3>Q: This is my first time using Home Order, are there any reviews I can see of current volunteers?</h3>
        <h5>A: You can actually check them out on the <Link to={ROUTES.REVIEWS}>reviews</Link> section </h5>

  </div>
);
}

export default faq;