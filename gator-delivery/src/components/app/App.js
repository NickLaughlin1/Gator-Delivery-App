import React, {useState, useEffect} from 'react';
import '../index.css';
import Login from '../sign-in/Login'
import AddTask from '../add-task/AddTask'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar"
import TaskList from "../tasklist/TaskList"
import CreateTask from "../createtask/CreateTask"

const App = (props) => {

/*const taskAdd = (task) => {
  console.log("Will add to database");
};*/

  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={TaskList} />
        <Route path="/create" component={CreateTask} />
      </div>
    </Router>
  );
}

export default App;
