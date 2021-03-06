import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, deleteToCart } from '../../redux/actionsCreators'




const Card = ({ name, teacher, image, price, id, crt, addCourseToCart, deleteCourseToCart }) => {
  return (
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to={`/cursos/${id}`}>
          <img src={image} alt="teacher" />
        </Link>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
          {name}
        </h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="data:image/png;base64,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" alt="teacher" />
              </div>
            </div>
            <span className="small"> {teacher} </span>
          </div>
        </div>
        <div className="s-main-center">
          {
            crt.find(d => d === id)
              ? <button className="button--ghost-alert button--tiny"
                href="ed.team"
                onClick={() => deleteCourseToCart(id)}
              >
                Eliminar
              </button>
              : <button className="button--ghost-alert button--tiny"
                href="ed.team"
                onClick={() => addCourseToCart(id)}
              >
                {price} MXN
              </button>
          }
        </div>
      </div>
    </article>
  )
}

Card.propTypes = {
  name: propTypes.string,
  image: propTypes.string,
  teacher: propTypes.string,
  price: propTypes.string
}

Card.defaultProps = {
  name: 'Sin titulo',
  image: 'data:image/jpeg;base64,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',
  teacher: 'No hay profesor',
  price: '50'
}

const mapStateToProps = (state) => {
  return (
    { crt: state.cartReducer.cart }
  )
}

const mapDispatchToProps = dispatch => ({
  addCourseToCart(id) {
    dispatch(addToCart(id))
  },
  deleteCourseToCart(id) {
    dispatch(deleteToCart(id))
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(Card)