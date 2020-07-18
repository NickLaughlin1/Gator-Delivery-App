import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
  
const Home = (props) => {

  return (
    <div>
      <h1>Homepage for user </h1>
      <Link to={ROUTES.CREATE} className="nav-link">
        <button type="button" class="btn btn-primary btn-lg">Post a job</button>
      </Link>
    </div>
  );
};
 
export default Home;