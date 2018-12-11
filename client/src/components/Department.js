import React from 'react';
import axios from "axios";

class Department extends React.Component {
  state = { department: [], };

  componentDidMount() {
    const { id, } = this.props.match.params;
    axios.get(`/api/departments/${id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })
  }


  render() {
    const {name} = this.state.department
    return (
      <div>
        <h3>{name}</h3>
      </div>
    )
  }
}

export default Department;