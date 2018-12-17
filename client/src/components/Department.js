import React from 'react';
import axios from "axios";
import { Link, } from 'react-router-dom';
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

  renderItems(id) {
    const department_id = this.props.match.params.id;
    return this.state.items.map( i => (
      <div key = {i.id} count = {this.state}>
        <DepContainer style = {{background: "none"}}>
          <Button.Group basic style = {{float: "right"}} color = "yellow">
            <Button 
              icon 
              compact
              onClick={() => this.removeItem(i.id)}
            >
              <Icon name = "trash" />
            </Button>

            <Link to = {`/departments/${department_id}/items/${i.id}/edit`}>
              <Button 
                icon 
                compact 
              >
                <Icon name = "pencil" />
              </Button>
            </Link>

            <Button 
              icon 
              compact 
              onClick = {() => this.checkout(i.id)}
            >
              <Icon name = "shopping cart" />
            </Button>

            <Button 
              icon 
              compact 
            >
              <Icon name = "star" />
            </Button>
          </Button.Group>

          <p style = {{color: "white",}}>{i.name}</p>
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
          <Link to = "/MyCart">
            <Icon name = "shopping cart"/>
          </Link>
            <p>: {this.state.count}</p>
        </CartContainer> 
       <h2 style = {{marginRight: "48px"}}>{name}</h2>
       <Link to = {`/departments/${id}/items/new`}>
        add item
       </Link>
       <div>
         { this.renderItems() }
       </div>
      </div>
    )
  }
}

export default Department;