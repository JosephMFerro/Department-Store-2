import React from 'react';
import axios from "axios";
import { DepContainer, MyButton, } from '../styles/appstyle';
import {Divider, Button, } from 'semantic-ui-react';

class Department extends React.Component {
  state = { department: {}, items: [], } ;

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then( res => this.setState({ department: res.data, }))
    axios.get(`/api/departments/${id}/items`)
      .then( res => this.setState({ items: res.data, }))
  }

  removeItem = (id) => {
    const dId = this.props.match.params.id;
      axios.delete(`/api/departments/${dId}/items/${id}`)
        .then( res => {
          const items = this.state.items.filter( i => {
            if (i.id !== id)
              return i;
          })
          this.setState({ items, });
      })
  }

  renderItems() {
    return this.state.items.map( i => (
      <div key = {i.id}>
        <DepContainer>
        <Button compact color = "yellow" style = {{float: "right"}} onClick={() => this.removeItem(i.id)}>del</Button>
          <p style = {{color: "white"}}>{i.name}</p>
          <Divider inverted />
          <p>{i.description}</p>
          <p style = {{color: "white"}}>${i.price}</p>
        </DepContainer>
      </div>
    ))
  }
    

  render() {
    const {department: {name, id}} = this.state
    return (
      <div>
       <h2>{name}</h2>
       <div>
         { this.renderItems() }
       </div>
      </div>
    )
  }
}

export default Department;