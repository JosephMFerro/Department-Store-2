import React from 'react';
import axios from "axios";
import { Link, } from "react-router-dom";
import Items from './Items';

class Department extends React.Component {
  state = { department: {}, items: []} ;

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })
  }


  render() {
    const {name, id} = this.state.department
    return (
      <div>
       <h2>{name}</h2>
       <p>testitem</p>
       <p>usa made plastic test item from {name}</p>
       <p>13.99</p>
       <p>{this.state.items}</p>
      </div>
    )
  }
}

export default Department;