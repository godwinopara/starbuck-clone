import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	const navStyle = {
		background: "white",
		color: "black",
	};

	const navLinkStyle = {
		color: "black",
	};

	return (
		<nav style={navStyle} className="nav-container">
			<div className="left-side-nav">
				<a className="logo" href="/">
					<img src="" alt="" />
				</a>
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
			<div className="right-side-nav">
				<ul>
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
		</nav>
	);
};

export default NavBar;
