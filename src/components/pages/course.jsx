import React from 'react'
import courses from '../../listCurses'
// import Courses from './courses'



const Course = ({ match }) => {

  const nowCurse = courses.filter((c) => c.nameRoute === match.params.nameRoute)[0]
  console.log(nowCurse)

  return (

    nowCurse ? (
      <div className="ed-grid ed-grid-3">
        <h3 className="m-cols-3 center">
          {nowCurse.name}
        </h3>
        <img src={nowCurse.image} className="m-cols-3" alt="teacher" width="400px" height="250px" />
        <p className="small m-cols-2 center"> {nowCurse.teacher} </p>
      </div>
    )
      : (
        <>
          <h2 className="center"> 505 </h2>
          <h2 className="center"> Curso no encontrado. Error con el servidor. </h2>
        </>
      )
  )
}

export default Course