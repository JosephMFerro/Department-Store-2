import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Form, } from 'semantic-ui-react';

class ItemForm extends React.Component {
  state = {name: "", description: "", price: "", editing: false}

  componentDidMount() {
    const { id, itemId } = this.props.match.params;
    if (itemId)
      this.setState({editing: true})
      axios.get(`/api/departments/${id}/items/${itemId}`)
        .then( res => this.setState({ ...res.data, }))
  }

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
    const { name, description, price, editing} = this.state;
    const { id, } = this.props.match.params
    return (
      <div>
        { editing ? <h2>Edit Item</h2> : <h2>Add Item</h2>}
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
          <Link to = {`/departments/${id}`}>
              cancel
          </Link>
        </Form>
      </div>
    )
  }
}

export default ItemForm;