import React from 'react'
import { NavLink } from 'react-router-dom'
import CardCounter from '../atoms/cardCounter'

const MainMenu = () => {
  return (
    <nav className="main-menu" id="main-menu">
      <ul>
        <li><NavLink exact to="/" active className="activo"> Inicio </NavLink></li>
        <li><NavLink to="/cursos" className="activo"> Cursos </NavLink></li>
        <li><NavLink to="/formulario" className="activo"> Formulario </NavLink></li>
        <li><NavLink to="/usuarios" className="activo"> Usuarios </NavLink></li>
        <li> <CardCounter /> </li>
      </ul>
    </nav>
  )
}

export default MainMenu