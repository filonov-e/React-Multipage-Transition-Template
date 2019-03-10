import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from "./Header";
import Container from "./Container";

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  componentWillMount() {
    require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Container />
        </div>
      </Router>
    );
  }
}

export default App;
