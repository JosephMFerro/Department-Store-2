import React from 'react';
import axios from "axios";
import { Form, } from "semantic-ui-react";

class DepartmentForm extends React.Component {
  state = {name: ""};

  handleSubmit = (e) => {
    e.preventDefault();
      axios.post(`/api/departments`, { ...this.state })
        .then( res => this.props.history.push(`/departments/${res.data.id}`))
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const {name} = this.state;
    return (
      <div>
        <h2>Add a Department</h2>
        <Form onSubmit = {this.handleSubmit}>
          <Form.Input 
            name = "name"
            placeholder = "name"
            value = {name}
            onChange = {this.handleChange}
          />
          <Form.Button color = "yellow">
            submit
          </Form.Button>
        </Form>
      </div>
    )
  }
};

export default DepartmentForm;