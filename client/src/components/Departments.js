import React from 'react';  
import axios from "axios";
import { Link, } from "react-router-dom";
import { DepContainer } from '../styles/appstyle';
import { Divider, Button, } from 'semantic-ui-react';

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data, });
      })
  }

  handleDelete = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then( res => this.props.history.push("/departments"))
  }

  renderDepts = () => {
    return this.state.departments.map( d => (
        <Link to={`/departments/${d.id}`} key = {d.id}>
          <DepContainer>
          <Button compact color = "yellow" style = {{float: "right"}} onClick={() => this.handleDelete(d.id)}>del</Button>
            <p>{ d.name }</p>
            <Divider inverted />
            <p style = {{color: "white"}}>
              An graeci fastidii vix, qui putant prodesset cu. Usu in nonumy splendide. 
              His dicunt tacimates maiestatis no, mea etiam sententiae ea.
            </p>
          </DepContainer>
        </Link>
    ))
  }

  render () {
    return (
      <div>
        <h2>Departments</h2>
          { this.renderDepts() }
      </div>
    )
  }
}

export default Departments;