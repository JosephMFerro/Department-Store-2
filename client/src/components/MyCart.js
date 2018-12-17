import React from 'react';
import {Link} from 'react-router-dom';

const MyCart = () => (
  <div>
    <h2>Cart</h2>
    <p>there is nothing here.</p>
    <p>what were you expecting?</p>
    <p>this is not a real website</p>
    <Link to = "/departments">
      <p>just go back</p>
    </Link>
  </div>
)

export default MyCart;