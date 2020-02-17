import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const NavWrapper = props => {
	const logo = require('../assets/apple.svg');
	return (
		<nav className="nav-wrapper">
			<NavLink activeClassName="activeLink" to={'/'}>
				<span>
					<img src={logo}></img>
				</span>
			</NavLink>
			<NavLink activeClassName="activeLink" to={'/mac'}>
				Mac
			</NavLink>
			<NavLink activeClassName="activeLink" to={'/ipad'}>
				iPad
			</NavLink>
			<NavLink activeClassName="activeLink" to={'/iphone'}>
				iPhone
			</NavLink>
			<NavLink activeClassName="activeLink" to={'/watch'}>
				Watch
			</NavLink>
			<NavLink activeClassName="activeLink" to={'/tv'}>
				TV
			</NavLink>
			<NavLink activeClassName="activeLink" to={'/music'}>
				Music
			</NavLink>
			<span>Support</span>
			<span></span>
			<span>Koszyk</span>
		</nav>
	);
};
export default NavWrapper;
