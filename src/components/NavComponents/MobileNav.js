import NavItem from "../NavComponents/NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import useLockBodyScroll from "../../use-lock-bar";
const MobileViewNav = () => {
	const leftSideNav = ["MENU", "REWARDS", "GIFT CARDS"];
	const findStoreNav = ["Find a Store"];
	const signInNav = ["Sign in", "Join Now"];

	useLockBodyScroll();

	return (
		<div className="mobile-nav">
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
	);
};

export default MobileViewNav;
