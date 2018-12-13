import React from 'react';
import axios from "axios";
import { DepContainer, } from '../styles/appstyle';
import {Divider, Button, Icon, } from 'semantic-ui-react';
import { CartContainer, } from '../styles/appstyle';

class Department extends React.Component {
  state = { department: {}, items: [], count: 0} ;

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

  checkout = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  }

  renderItems() {
    return this.state.items.map( i => (
      <div key = {i.id} count = {this.state}>
        <DepContainer >
        <Button 
          icon 
          compact 
          color = "yellow" 
          style = {{float: "right"}} 
          onClick={() => this.removeItem(i.id)}
          >
            <Icon name = "trash" />
          </Button>

          <Button 
          icon 
          compact 
          color = "yellow" 
          style = {{float: "right"}} 
          // onClick={() => this.renderEdit(i.id)}
          >
            <Icon name = "pencil" />
          </Button>

          <Button 
          icon 
          compact 
          color = "yellow" 
          style = {{float: "right"}} 
          onClick = {() => this.checkout(i.id)}
          >
            <Icon name = "shopping cart" />
          </Button>

          <p style = {{color: "white", marginRight: "-50.77px"}}>{i.name}</p>
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
        <CartContainer>
          <Icon name = "shopping cart"/>
          <p>: {this.state.count}</p>
        </CartContainer> 
       <h2>{name}</h2>
       <div>
         { this.renderItems() }
       </div>
      </div>
    )
  }
}

export default Department;