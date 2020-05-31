import React from 'react'

const Banner = () => {
  return (
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://miro.medium.com/max/12000/1*fXBo56b0tanSCNHo4O2eWw.jpeg" alt="codigo" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">¿Quieres aprender React? </p>
            <p> Te estamos esperando </p>
            <a href="www.youtube.com" className="button">Ingresar</a>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Banner