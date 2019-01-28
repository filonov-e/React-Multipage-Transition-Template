import React, { Component } from 'react';

import { Switch, Route, withRouter } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './Home.js';
import About from './About.js';
import Contacts from './Contacts.js';
import Profile from './Profile.js';
import Login from './Login.js';
import Counter from './Counter.js';

class Container extends Component {
  render() {
    return (
      <div className="Container">
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'fade'}
          >
            <section className="route-section">
              <Switch location={ this.props.location }>
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/contacts" component={ Contacts } />
                <Route path="/profile" component={ Profile } />
                <Route path="/login" component={ Login } />
                <Route path="/counter" component={ Counter } />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(Container);
