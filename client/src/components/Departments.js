import React from 'react';  
import axios from "axios";
import { Link, } from "react-router-dom";

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data, });
      })
  }

  renderDepts = () => {
    return this.state.departments.map( d => (
      <Link to={`/departments/${d.id}`}>
        <p>{ d.name }</p>
      </Link>
    ))
  }

  render () {
    return (
      <div>
        <h2>departments.</h2>
          { this.renderDepts() }
      </div>
    )
  }
}

export default Departments;