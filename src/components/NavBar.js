import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import starBuckIcon from "../images/starbuck-logo.svg";
import React, { useState } from "react";

const NavBar = () => {
	const [showNav, setshowNav] = useState(true);

	const starBuckLogoSize = {
		height: 32,
	};

	const handleClick = () => {
		if (showNav === true) {
			setshowNav(false);
		} else setshowNav(true);
	};

	return (
		<nav>
			<div className="nav-container container">
				<a className="logo" href="/">
					<img style={starBuckLogoSize} src={starBuckIcon} alt="" />
				</a>
				<div className={showNav ? "showNav" : "nav-links"}>
					<div className="left-side-nav">
						<ul>
							<li>
								<a href="/menu">MENU</a>
							</li>
							<li>
								<a href="/rewards">REWARDS</a>
							</li>
							<li>
								<a href="/gift">GIFT CARDS</a>
							</li>
						</ul>
					</div>
					<div className="right-side-nav ">
						<ul>
							<li>
								<a href="/location">
									<FontAwesomeIcon icon={faMapMarkerAlt} />
									Find a store
								</a>
							</li>
						</ul>
						<ul className="login">
							<li>
								<a href="/sign-up">sign in</a>
							</li>
							<li>
								<a href="/join-now">join now</a>
							</li>
						</ul>
					</div>
				</div>

				<div onClick={handleClick} className="hamburger-menu" data-nav="nav">
					<div className="hamburger"></div>
					<div className="hamburger"></div>
					<div className="hamburger"></div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
