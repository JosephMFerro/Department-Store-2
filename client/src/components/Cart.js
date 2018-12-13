import React from 'react';
import {Icon} from 'semantic-ui-react';
import {CartContainer, } from '../styles/appstyle';
import Department from './Department';

class Cart extends React.Component {
  render() {
    return (
      <CartContainer>
        <Icon name = "shopping cart"/>
        <p>: {count}</p>
      </CartContainer>  
    )
  }
}

export default Cart;