import React, { useState } from "react";
import starBuckIcon from "../nav/navImage/starbuck-logo.svg";
import Hamburger from "../nav/Hamburger";
import NavItem from "./NavItem";
import NavContent from "./NavContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	const [openNav, setopenNav] = useState(false);

	const handleOpenNav = () => {
		openNav ? setopenNav(false) : setopenNav(true);
	};
	return (
		<>
			<nav>
				<div className="nav-container container">
					<a className="logo" href="/">
						<img src={starBuckIcon} alt="starbuck logo" />
					</a>
					<div className={`nav-links ${openNav ? "show-nav" : ""}`}>
						<div className="left-side-nav">
							<NavItem items={NavContent.leftSideLink} />
						</div>
						<div className="right-side-nav">
							<div className="location">
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									className="location-marker"
								/>

								<ul className="find-store">
									<li>Find Store</li>
								</ul>
							</div>
							<div className="signup">
								<NavItem items={NavContent.signInLink} />
							</div>
						</div>
					</div>
					<Hamburger handleClick={handleOpenNav} />
				</div>
			</nav>
			<hr />
		</>
	);
};

export default NavBar;
