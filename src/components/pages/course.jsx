import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Course = ({ match }) => {

  const [state, setState] = useState({})
  const [comment, setComment] = useState("")

  useEffect(() => {
    axios.get(`http://my-json-server.typicode.com/GeraCV/db-json/courses/${match.params.id}`)
      .then(response => setState(response.data))
  }, [])


  const changeComment = e => {
    setComment(e.target.value)
  }



  return (
    state ? (
      <div className="ed-grid">
        <div className="l-block">
          <h3 className="m-cols-3 center"> {state.name} </h3>
          <img src={state.image} className="m-cols-3" alt="teacher" width="400px" height="250px" />
          <p className="small m-cols-2 center"> {state.teacher} </p>
        </div>
        <div className="ed-grid">
          <h2> Escribe tu comentario </h2>
          <input type="text" placeholder="Ingresa el mensaje ..." onChange={changeComment.bind(this)} />
          <p> {comment} </p>
        </div>
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