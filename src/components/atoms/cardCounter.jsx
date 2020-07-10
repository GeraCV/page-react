import React from 'react'
import { connect } from 'react-redux'

const CartCounter = ({ cartCount }) => {
  return (
    <button className="button tiny ghost"> Carrito: {cartCount.length} </button>
  )
}

const mapStateToProps = (state) => {
  return (
    { cartCount: state.cartReducer.cart }
  )
}

const mapDispatchToProps = () => {
  return ({})
}

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)

