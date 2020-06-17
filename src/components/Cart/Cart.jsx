import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkout } from '../actions';
import { getTotal, getCartProducts } from '../reducers';
import Article from '../Article';

const Cart = ({ shoppingCart }) => {
  const total = shoppingCart.length;
  const hasProducts = total > 0;
  const nodes = hasProducts ? (
    shoppingCart.map(product =>
      <Article {...product} />
    )
  ) : (
      <em>Add some products to cart</em>
    );

  return (
    <div>
      <h3>Shopping Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={console.log('Comprar!')}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout!
      </button>
    </div>
  )
};

Cart.propTypes = {
  shoppingCart: PropTypes.array,
}

export default Cart;
