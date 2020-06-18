import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/'

const CartContainer = ({ shoppingCart }) => (
  <Cart {...shoppingCart} />
)



const mapStateToProps = (state) => ({
  shoppingCart: getCartProducts(state),
})

export default connect(mapStateToProps, { checkout } )(CartContainer);
