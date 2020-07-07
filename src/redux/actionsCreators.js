const { ADD_TO_CART } = require("./actions");

const addToCart = (id) => (
  {
    type: ADD_TO_CART,
    data: id
  }
)

export { addToCart }