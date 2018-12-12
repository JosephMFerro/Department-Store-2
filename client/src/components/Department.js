import React from 'react';
import axios from "axios";
import { DepContainer} from '../styles/appstyle';
import {Divider, } from 'semantic-ui-react';

class Department extends React.Component {
  state = { department: {}, items: [], } ;

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then( res => this.setState({ department: res.data, }))
    axios.get(`/api/departments/${id}/items`)
      .then( res => this.setState({ items: res.data, }))
  }

  renderItems() {
    return this.state.items.map( i => (
      <div>
        <DepContainer>
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