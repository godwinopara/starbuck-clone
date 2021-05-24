import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import starBuckIcon from "../images/starbuck-logo.svg";

const NavBar = () => {
	const navStyle = {
		background: "white",
		color: "black",
	};

	const starBuckIconStyle = {
		height: 40,
	};

	return (
		<nav style={navStyle}>
			<div className="nav-container container">
				<div className="left-side-nav">
					<a className="logo" href="/">
						<img style={starBuckIconStyle} src={starBuckIcon} alt="" />
					</a>
					<ul className="nav-list">
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
				<div className="right-side-nav">
					<ul className="nav-link">
						<li>
							<a href="/location">
								<FontAwesomeIcon icon={faMapMarkerAlt} />
								Find a store
							</a>
						</li>
						<li>
							<a href="/sign-up">sign in</a>
						</li>
						<li>
							<a href="/join-now">join now</a>
						</li>
					</ul>
				</div>
				<div className="hamburger-menu">
					<div className="hamburger"></div>
					<div className="hamburger"></div>
					<div className="hamburger"></div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
