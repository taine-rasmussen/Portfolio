import React from 'react';

const WebMenu = () => {

	return(
		<div className="webmenu-container">
			<div className="webmenu-option">
				<a href="#project">
					<i className="fi fi-rr-edit-alt"></i> Projects
				</a>
			</div>
			<div className="webmenu-option">
				<a href="#skills">
					<i className="fi fi-rr-computer"></i> Skills
				</a>
			</div>
			<div className="webmenu-option">
				<a href="#contact">
					<i className="fi fi-rr-address-book"></i> Contact
				</a>
			</div>
		</div>
	)
}

export default WebMenu