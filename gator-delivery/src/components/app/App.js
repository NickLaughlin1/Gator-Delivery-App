import React, {useState, useEffect} from 'react';
import '../index.css';
import Login from '../sign-in/Login'
import Board from '../community/Board'

function App() {
  return (
    <div className="overall-div">
      <div className="main-title">
        <h1>Gator Delivery</h1>
          <div className="column-1 community">
          <br></br>
          <h3>Community Board</h3>
          <Board/>
          </div>
      </div>
      <div className="row-1 sign-in">
        <Login/>
      </div>
    </div>
  );
}

export default App;
