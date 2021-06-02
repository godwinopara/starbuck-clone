import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItem from "../nav/NavItem";
import footerTexts from "./FooterText";
import FooterAccodion from "./footerAccodion/FooterAccodion";

const Footer = () => {
	return (
		<footer>
			<div className="footer-links-container ">
				<div className="footer-links container">
					<FooterAccodion />
				</div>
			</div>

			<div className="social-media container">
				<div className="footer-icons">
					<FontAwesomeIcon icon={["fab", "spotify"]} className="fa-icon" />
				</div>
				<div className="footer-icons">
					<FontAwesomeIcon icon={["fab", "facebook"]} className="fa-icon" />
				</div>
				<div className="footer-icons">
					<FontAwesomeIcon icon={["fab", "pinterest"]} className="fa-icon" />
				</div>
				<div className="footer-icons">
					<FontAwesomeIcon icon={["fab", "instagram"]} className="fa-icon " />
				</div>
				<div className="footer-icons ">
					<FontAwesomeIcon icon={["fab", "youtube"]} className="fa-icon" />
				</div>
				<div className="footer-icons">
					<FontAwesomeIcon icon={["fab", "twitter"]} className="fa-icon" />
				</div>
			</div>

			<div className="privacy-and-terms">
				<div className="privacy-container container">
					<NavItem items={footerTexts.privacyLink} />
				</div>
			</div>
			<div className="copy-right ">
				<p className="container">
					copyright &copy; 2021 Starbucks Coffee Company. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
