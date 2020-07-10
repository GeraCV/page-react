const { ADD_TO_CART, DELETE_TO_CART, GET_ALL_COURSES } = require("./actions")

const addToCart = (id) => {
  return (
    {
      type: ADD_TO_CART,
      data: id
    }
  )
}

const deleteToCart = (id) => {
  return (
    {
      type: DELETE_TO_CART,
      data: id
    }
  )
}

const getAllCourses = () => async (dispatch) => {
  const answer = await fetch('http://my-json-server.typicode.com/GeraCV/db-json/courses')
  const response = await answer.json()
  return dispatch({
    type: GET_ALL_COURSES,
    data: response
  })
}
export { addToCart, deleteToCart, getAllCourses }