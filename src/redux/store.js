import { createStore, combineReducers, applyMiddleware } from 'redux'
import { ADD_TO_CART, DELETE_TO_CART, GET_ALL_COURSES } from './actions'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialStateCart = {
  cart: []
}

const initialStateCourses = {
  courses: []
}

const cartReducer = (state = initialStateCart, action) => {

  if (action.type === ADD_TO_CART) {

    console.log(action.type, action.data)
    if (state.cart.find(d => d === action.data)) return state
    return {
      ...state, cart: state.cart.concat(action.data)
    }
  }

  if (action.type === DELETE_TO_CART) {
    return {
      ...state,
      cart: state.cart.filter(d => d !== action.data)
    }
  }
  return (state)
}


const coursesReducer = (state = initialStateCourses, action) => {
  if (action.type === GET_ALL_COURSES) {
    return {
      ...state,
      courses: action.data
    }
  }
  console.log(action)
  return state

}
export default createStore(combineReducers({ cartReducer, coursesReducer }), composeWithDevTools(applyMiddleware(thunk)))