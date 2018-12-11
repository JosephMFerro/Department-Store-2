import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import NoPage from './components/NoPage';
import Home from './components/Home';
import Contact from './components/Contact';
import Departments from './components/Departments';
import Department from './components/Department';
// import Department from './components/Department';

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path = "/" component = {Home} />
      <Route exact path = "/contact" component = {Contact} />
      <Route exact path = "/departments/:id" component = {Department} />
      <Route exact path = "/departments" component = {Departments} />
      <Route component = {NoPage} />
    </Switch>
  </Fragment>
)

export default App;
