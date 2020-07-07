import { createStore } from 'redux'
import { ADD_TO_CART } from './actions'

const initialStore = {
  cart: []
}

const Reducer = (state = initialStore, { type, data }) => {
  if (type === ADD_TO_CART) {
    if (state.cart.find(d => d === data)) return state
    return {
      ...state,
      cart: state.cart.concat(data)
    }
  }
  return state
}

export default createStore(Reducer)