import React from 'react'
import Card from './cardCourse'
import withLoader from '../HOC/withLoader'

const CoursesGrid = ({ courses }) => {
  return (
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
}

export default withLoader("courses", CoursesGrid) 