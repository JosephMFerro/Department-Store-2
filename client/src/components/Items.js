import React from 'react';  
import axios from "axios";

class Items extends React.Component {
  state = { items: [],};

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/departments/${id}items`)
      .then( res => {
        this.setState({ items: res.data, });
      })
  }

  renderItems = () => {
    return this.state.items.map( i => (
      <div>
        <li>{i.name}</li>
        <li>{i.description}</li>
        <li>{i.price}</li>
      </div>
    ))
  };

  render() {
    return (
      <div>
        <ul>
          { this.renderItems() }
        </ul>
      </div>
    )
  }
}

export default Items;