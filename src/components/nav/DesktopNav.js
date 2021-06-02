import NavItem from "../NavComponents/NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const DesktopNav = ({ imageSize, imgSrc }) => {
	const leftSideNav = ["MENU", "REWARDS", "GIFT CARDS"];
	const findStoreNav = ["Find a Store"];
	const signInNav = ["Sign in", "Join Now"];
	return (
		<div className="desktop-nav">
			<div className="desktop-nav-container container">
				<div className="left-side-nav">
					<div className="starbuck-logo">
						<img style={imageSize} src={imgSrc} alt="" />
					</div>
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
		</div>
	);
};

export default DesktopNav;
