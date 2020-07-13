import React, {useState, useEffect} from 'react';
import '../index.css';
import Login from '../sign-in/Login'
import AddTask from '../add-task/AddTask'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar"
import TaskList from "../tasklist/TaskList"
import CreateTask from "../createtask/CreateTask"
import Board from '../community/Board'

const App = (props) => {

  return (
    <Router>
      <div className="container">
        <Navbar />
        <Login/>
        <br />
        <Route path="/" exact component={TaskList} />
        <Route path="/create" component={CreateTask} />
        <Route path="/community" component={Board} />    
      </div>
    </Router>
  );
}

export default App;
