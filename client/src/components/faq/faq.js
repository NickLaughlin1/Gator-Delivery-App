import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import app from '../firebase/firebase'

const faq = () => {

return(  
    <div className="container">
        <div className = "faqprofile" style={{ alignItems: "center", alignContent: "center", backgroundColor: "white", padding: "20px", marginTop: "30px", borderRadius: "50px", marginLeft: "11%", marginRight: "11%", marginBottom: "30px"}}>
            {/* <br></br><br></br><br></br><br></br> */}
                <h1>Frequently Asked Questions</h1>
                <br></br><br></br><br></br><br></br>
                <h4>Q: How do I place an order?</h4>
                <br></br>
                <h6>A: If you click the button above that says "Create Job" it will walk you through the process
                    of posting a job.
                </h6>
                <br></br><br></br><br></br><br></br>
                <h4>Q: How do I become a volunteer if I'm already signed up?</h4>
                <br></br>
                <h6>A: If you go into your <Link to={ROUTES.PROFILE_SETTINGS}>Account</Link> and select the "Profile" tab,
                you can update your member type between "Volunteer" and "Customer" </h6>
                <br></br><br></br><br></br><br></br>
                <h4>Q: Do you store all my information that goes into the sign-up?</h4>
                <br></br>
                <h6>A: No, the only information that is stored is your username for verification of a valid account.</h6>
                <br></br><br></br><br></br><br></br>
                <h4>Q: This is my first time using Home Order, are there any reviews I can see of current volunteers?</h4>
                <br></br>
                <h6>A: You can actually check them out on the <Link to={ROUTES.REVIEWS}>reviews</Link> section. </h6>
                <br></br><br></br><br></br><br></br>
                <h4>Q: I've never done any home projects before, can Home Order help me figure out what I need?</h4>
                <br></br>
                <h6>A: Yes, if you go to our <Link to={ROUTES.COMMUNITY}>community board</Link> you can ask get help from 
                both volunteers and other people to narrow down what you may need.</h6>
            <br></br><br></br><br></br>

        </div>
    </div>

);
}

export default faq;