import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import NoPage from './components/NoPage';
import Home from './components/Home';
import Contact from './components/Contact';
import Departments from './components/Departments';
import Department from './components/Department';
import Items from './components/Items';
import NavBar from './components/NavBar';
import {AppContainer, AppColor } from './styles/appstyle';
import {Divider} from 'semantic-ui-react';

const App = () => (
  <AppColor>
    <AppContainer>
      <Fragment>
        <NavBar />
        <Divider inverted/>
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/contact" component = {Contact} />
          <Route exact path = "/departments/:id" component = {Department} />
          <Route exact path = "/departments" component = {Departments} />
          <Route exact path='/departments/:id/items' component={Items} />
          <Route component = {NoPage} />
        </Switch>
        <Divider inverted />
      </Fragment>
    </AppContainer>
  </AppColor>
)


export default App;