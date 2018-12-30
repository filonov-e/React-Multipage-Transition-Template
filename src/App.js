import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from "./Header";
import Container from "./Container";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Container />
        </div>
      </Router>
    );
  }
}

export default App;
