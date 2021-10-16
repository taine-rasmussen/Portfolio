import React from 'react'
import Mobile from '../styles/Mobile.scss'

const MobileMenu = ({menuOpen, setMenuOpen}) => {

	return(
		<div className="mobile-container">
			<div className="mobile-close-icon" onClick={() => setMenuOpen(!menuOpen)}>
				<i className="fi fi-rr-cross-circle"></i>
			</div>
		</div>
	)
}

export default MobileMenu