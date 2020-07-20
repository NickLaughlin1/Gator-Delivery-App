import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
  
const Landing = (props) => {


  return (
    <div className='container landing-page'>
    <h1>Insert image here</h1>

    <Link to={ROUTES.SIGN_IN} className="nav-link">
      <button type="button" class="btn btn-primary btn-lg">Post a job</button>
    </Link>
    
    
    </div>
  );
  };
 
export default Landing;