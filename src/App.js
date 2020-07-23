import React, { Component } from 'react';
import './App.css';
import SignInSide from '../src/components/login';
import LandingPage from '../src/components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  render() {
    return (
      <div className="route-container">
        <Router>
          <Switch>
            <Route path='/' component={LandingPage} exact>
            </Route>
          </Switch>
        </Router>


      </div>
    );
  }
}

