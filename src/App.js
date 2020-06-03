import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Shop from './Shop';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './Signup';
import Login from './Login';
function App() {
  return (
    <div className="App">
      <h1>shopping app</h1>

      <Router>

        <switch>
  
          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/Shop">
            <Shop />
          </Route>

        </switch>
      
      </Router>
    </div>
  );
}

export default App;
