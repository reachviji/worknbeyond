import React, { Component } from "react";
import Navigation from '../components/Navigation';
import {
    BrowserRouter as Router
} from "react-router-dom";
import SimpleTabs from './HomeTabs';

export default class LandingPage extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Navigation />
                    <SimpleTabs />
                </div>
            </Router>
        );
    }
}