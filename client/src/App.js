import React, { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import NoPage from './components/NoPage';
import Home from './components/Home';
import Contact from './components/Contact';
import Departments from './components/Departments';
import Department from './components/Department';
import NavBar from './components/NavBar';
import DepartmentForm from './components/DepartmentForm';
import ItemForm from './components/ItemForm';
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
          <Route exact path = "/departments" component = {Departments} />
          <Route exact path = "/departments/new" component = {DepartmentForm} />
          <Route exact path="/departments/:id/edit" render={props => <DepartmentForm edit {...props} />} />
          <Route exact path = "/departments/:id" component = {Department} />
          <Route exact path = "/departments/:id/items/new" component = {ItemForm} />
          <Route exact path="/departments/:id/items/:itemId/edit" component={ItemForm} />
          <Route component = {NoPage} />
        </Switch>
        <Divider horizontal inverted >©2018 joe ferro</Divider>
      </Fragment>
    </AppContainer>
  </AppColor>
)


export default App;