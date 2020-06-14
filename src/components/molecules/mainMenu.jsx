import React from 'react'
import { NavLink } from 'react-router-dom'

const MainMenu = () => {
  return (
    <nav className="main-menu" id="main-menu">
      <ul>
        <li><NavLink exact to="/" active ClassName="activo"> Inicio </NavLink></li>
        <li><NavLink to="/cursos" active ClassName="activo"> Cursos </NavLink></li>
        <li><NavLink to="/formulario" active ClassName="activo"> Formulario </NavLink></li>
      </ul>
    </nav>
  )
}

export default MainMenu