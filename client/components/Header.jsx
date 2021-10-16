import React from 'react';
import '../styles/Header.scss'
import WebMenu from './WebMenu'
import MobileMenu from './MobileMenu'

const Header = () => {

  return(
    <div className="header-container">
      <div className="header-logo">Taine Rasmussen</div>
        <div className="header-menu">
          <div className='header-web-menu'>
            <WebMenu />
          </div>
          <div className='header-mobile-menu'>
            <MobileMenu />
          </div>
        </div>
    </div>
  )
}

export default Header

    