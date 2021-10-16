import React from 'react'
import Mobile from '../styles/Mobile.scss'

const MobileMenu = ({menuOpen, setMenuOpen}) => {

	return(
		<div className="mobile-container">
			<div className="mobile-close-icon" onClick={() => setMenuOpen(!menuOpen)}>
				<i className="fi fi-rr-cross-circle"></i>
			</div>
				<div className="mobile-options-container">
					<div className="mobile-option">
					<a href="#project">
						<i className="fi fi-rr-edit-alt option-icon"></i> Projects
					</a>
				</div>
				<div className="mobile-option">
					<a href="#skills">
						<i className="fi fi-rr-computer option-icon"></i> Skills
					</a>
				</div>
				<div className="mobile-option">
					<a href="#contact">
						<i className="fi fi-rr-address-book option-icon"></i> Contact
					</a>
				</div>
			</div>
		</div>
	)
}

export default MobileMenu