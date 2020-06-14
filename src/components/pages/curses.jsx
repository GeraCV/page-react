import React from 'react'
import courses from '../../listCurses'
import Card from '../organisms/cardCourse'

const Curses = () => (
  <>
    <h1 className="title center"> Todos los cursos </h1>
    <div className="ed-grid m-grid-3">
      {
        courses.map(el => (<Card
          id={el.id}
          name={el.name}
          image={el.image}
          teacher={el.teacher}
          price={el.price}
          nameRoute={el.nameRoute} />
        ))
      }
    </div>
  </>
)

export default Curses