import React, { Component } from 'react';
import HomePage from '../pages/Home/Home';
import MenuComponent from './Menu/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withAuthentication from '../hoc/withAuthentication';

const App = () =>
  <Router >
    <div>
      <MenuComponent />
      <Route exact path="/"
        component={() => <HomePage />}
      />
    </div>
  </Router>

export default withAuthentication(App);