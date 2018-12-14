import React from 'react';
import axios from 'axios';
import {Form} from 'semantic-ui-react';

class ItemForm extends React.Component {
  state = {name: "", description: "", price: ""}

  handleSubmit = (e) => {
    e.preventDefault();
    const { match: { params: {id, } }, history: { push, } } = this.props;
      axios.post(`/api/departments/${id}/items`, { ...this.state })
        .then( res => push(`/departments/${id}`))
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
    // fancy way that spencer showed us
  }

  render() {
    const { name, description, price } = this.state;
    return (
      <div>
        <h2>Add an Item</h2>
        <Form onSubmit = {this.handleSubmit}>
          <Form.Input 
            name = "name"
            placeholder = "name"
            value = {name}
            onChange = {this.handleChange}
          />
          <Form.Input 
            name = "description"
            placeholder = "description"
            value = {description}
            onChange = {this.handleChange}
          />
          <Form.Input 
            name = "price"
            placeholder = "price"
            value = {price}
            onChange = {this.handleChange}
          />
          <Form.Button color = "yellow">
            submit
          </Form.Button>
        </Form>
      </div>
    )
  }
}

export default ItemForm;