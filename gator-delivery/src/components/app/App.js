import React, {useState, useEffect} from 'react';
import '../index.css';
import Login from '../sign-in/Login'

function App() {
  return (
    <div className="overall-div">
      <div className="main-title">
        <h1>Gator Delivery</h1>
      </div>
      <div className="row-1 sign-in">
        <Login/>
      </div>
    </div>
  );
}

export default App;
