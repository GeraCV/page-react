import React from 'react'
import { Link } from 'react-router-dom'

const Brand = () => {
  return (
    <Link to="/">
      <img className="main-logo" src="https://ed.team/static/images/logo.svg" alt="Logo EDteam" />
    </Link>
  )
}
export default Brand