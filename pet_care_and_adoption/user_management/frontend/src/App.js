// src/App.js or src/index.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.css'; // Import your CSS file

import Header from './components/Layout/Header';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Auth/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
