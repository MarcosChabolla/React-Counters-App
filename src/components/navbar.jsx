import React, { Component } from 'react';

// Stateless Functional Component
// Cannot use LifeCycle Hooks in SFC
// props do not work in functional components, must pass props in as parameter
const NavBar = ({totalCounters}) => {
	return ( 
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				Navbar{" "} 
				<span className = "badge badge-pill badge-secondary">
					{totalCounters}
				</span>
			</a>
		</nav> 
	);
};

export default NavBar;