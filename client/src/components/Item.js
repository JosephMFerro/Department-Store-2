import React from 'react';
import axios from "axios";

class Item extends React.Component {
  state = { item: {}, };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/departments/${id}/items/Item.id`)
      .then( res => {
        this.setState({ item: res.data, });
      })
  }

  render() {
    return (
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    )
  }
}

export default Item;