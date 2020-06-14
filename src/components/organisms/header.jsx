import React from "react"
import Brand from '../atoms/brand'
import MainMenu from '../molecules/mainMenu'
import Toogle from '../atoms/toogle'

const Header = () => (
  <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center">
        <Brand />
      </div>
      <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
        <MainMenu />
        <Toogle />
      </div>
    </div>
  </header>
)

export default Header 