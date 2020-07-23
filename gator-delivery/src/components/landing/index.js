import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../index.css'
  
const Landing = (props) => {


  return (
    <div className='container landing-page'>
      <div className='overlay'>
        <img src='https://greenindustryplatform.org/sites/default/files/styles/large/public/learning-resources/image/sol-518339-unsplash.jpg?itok=B4GJAY6_' 
          alt='background'
           />
      </div>

      <Link to={ROUTES.SIGN_IN} className="nav-link">
        <button type="button" className="btn btn-primary btn-lg">Post a job</button>
      </Link>
    
    
    </div>
  );
  };
 
export default Landing;