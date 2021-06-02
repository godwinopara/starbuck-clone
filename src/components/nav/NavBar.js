import React, { useState } from "react";
import starBuckIcon from "../nav/navImage/starbuck-logo.svg";

import Hamburger from "../nav/Hamburger";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	const [openNav, setopenNav] = useState(false);

	const leftSideNav = ["MENU", "REWARDS", "GIFT CARDS"];
	const findStoreNav = ["Find a Store"];
	const signInNav = ["Sign in", "Join Now"];

	const handleOpenNav = () => {
		openNav ? setopenNav(false) : setopenNav(true);
	};
	return (
		<nav>
			<div className="nav-container container">
				<a className="logo" href="/">
					<img src={starBuckIcon} alt="starbuck logo" />
				</a>
				<div className={`nav-links ${openNav ? "show-nav" : ""}`}>
					<div className="left-side-nav">
						<NavItem items={leftSideNav} />
					</div>
					<div className="right-side-nav">
						<div className="location">
							<FontAwesomeIcon icon={faMapMarkerAlt} className="location-marker" />
							<NavItem items={findStoreNav} />
						</div>
						<div className="signup">
							<NavItem items={signInNav} />
						</div>
					</div>
				</div>
				<Hamburger handleClick={handleOpenNav} />
			</div>
		</nav>
	);
};

export default NavBar;
