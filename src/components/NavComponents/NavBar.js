import React, { useState } from "react";
import starBuckIcon from "../NavComponents/navImage/starbuck-logo.svg";
import Hamburger from "../NavComponents/Hamburger";
import MobileViewNav from "./MobileNav";

const NavBar = () => {
	const [openNav, setopenNav] = useState(false);

	const starBuckLogoSize = {
		height: 32,
	};

	const handleOpenNav = () => {
		openNav ? setopenNav(false) : setopenNav(true);
	};

	return (
		<nav>
			<div className="nav-container container">
				<a className="logo" href="/">
					<img style={starBuckLogoSize} src={starBuckIcon} alt="" />
				</a>

				<Hamburger handleClick={handleOpenNav} />
				{openNav && <MobileViewNav />}
			</div>
		</nav>
	);
};

export default NavBar;
