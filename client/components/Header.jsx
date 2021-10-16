import React, { useState } from 'react';
import '../styles/Header.scss'

// Components
import WebMenu from './WebMenu'
import MobileMenu from './MobileMenu'


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return(
    <div className="header-container">
      <div className="header-logo">Taine Rasmussen</div>
        <div className="header-menu">
          <div className='header-web-menu'>
            <WebMenu />
          </div>
          <div className='header-mobile-menu'>
            <div onClick={() => setMenuOpen(!menuOpen)}>
              <i className="fi-rr-apps"></i>
            </div>
            {menuOpen ? <MobileMenu /> : null}
          </div>
        </div>
    </div>
  )
}

export default Header

    