import React from 'react';
import axios from "axios";
import { Link, } from 'react-router-dom';
import { Form, Button, } from "semantic-ui-react";

class DepartmentForm extends React.Component {
  state = {name: "", editing: false};

  componentDidMount() {
    if (this.props.edit)
    this.setState({editing: true});
      axios.get(`/api/departments/${this.props.match.params.id}`)
        .then( res => this.setState({ ...res.data, }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
      if (this.props.edit) {
        axios.put(`/api/departments/${this.props.match.params.id}`, { ...this.state })
          .then(res => this.props.history.push(`/departments/${res.data.id}`))
      } else {
        axios.post(`/api/departments`, { ...this.state })
          .then( res => this.props.history.push(`/departments/${res.data.id}`))
      }
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const {name} = this.state;
    return (
      <div>
        {this.state.editing ? <h2>Edit Department</h2> : <h2>Add Department</h2>}
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
          <Link to = "/departments">
              cancel
          </Link>
        </Form>
      </div>
    )
  }
};

export default DepartmentForm;