import React from 'react'
import { NavLink } from 'react-router-dom'

const MainMenu = () => {
  return (
    <nav className="main-menu" id="main-menu">
      <ul>
        <li><NavLink exact to="/" active className="activo"> Inicio </NavLink></li>
        <li><NavLink to="/cursos" active className="activo"> Cursos </NavLink></li>
        <li><NavLink to="/formulario" active className="activo"> Formulario </NavLink></li>
        <li><NavLink to="/usuarios" active className="activo"> Usuarios </NavLink></li>
      </ul>
    </nav>
  )
}

export default MainMenu