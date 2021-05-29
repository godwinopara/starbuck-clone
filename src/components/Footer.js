import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItem from "./NavComponents/NavItem";
import React, { useState } from "react";

const Footer = () => {
	const [showAbout, setshowAbout] = useState(false);
	const [showCareers, setshowCareers] = useState(false);
	const [showSocial, setshowSocial] = useState(false);
	const [showPartners, setshowPartners] = useState(false);
	const [showOrder, setshowOrder] = useState(false);

	const aboutLinks = [
		"Our Heritage",
		"Our Coffee",
		"Stories and News",
		"Investor Relations",
		"Policies and Standard",
		"Customer Service",
	];
	const careersLinks = [
		"Culture and Values",
		"Inclusion, Diversity and Equity",
		"College Achievement Plan",
		"U.S Careers",
		"International Careers",
	];

	const socialImpactLinks = [
		"Ethical Sourcing",
		"Leading in Sustainablity",
		"Strengthening Communities",
		"Creating Opportunities",
		"Global Social Impact Report",
	];

	const partnersLinks = [
		"Landlord Support Center",
		"Suppliers",
		"Corporate Gift Card Sales",
		"Office and Foodservice Coffee",
	];
	const orderAndPickLinks = [
		"Order on the App",
		"Order on the Web",
		"Delivery",
		"Order and Pickup Options",
		"Explore and Find Coffe for Home",
	];

	const privacyAndTermsLink = [
		"Privacy Policy",
		"Terms of Use",
		"CA Supply Chain Act",
		"Submit Your Idea",
		"Cookie Preferences",
	];

	const handleShowAbout = () => {
		showAbout ? setshowAbout(false) : setshowAbout(true);
	};
	const handleShowCareers = () => {
		showCareers ? setshowCareers(false) : setshowCareers(true);
	};
	const handleShowSocial = () => {
		showSocial ? setshowSocial(false) : setshowSocial(true);
	};
	const handleShowPartners = () => {
		showPartners ? setshowPartners(false) : setshowPartners(true);
	};
	const handleShowOrder = () => {
		showOrder ? setshowOrder(false) : setshowOrder(true);
	};

	return (
		<footer>
			<div className="footer-container ">
				<div className="footer-links container">
					<div className="about">
						<div className="about-title title" onClick={handleShowAbout}>
							<h3>About Us</h3>
							<FontAwesomeIcon icon="angle-down" size="2x" className="drop-down" />
						</div>
						{showAbout && <NavItem items={aboutLinks} className="footer-drop-down" />}
					</div>
					<div className="careers">
						<div className="title career-title" onClick={handleShowCareers}>
							<h3>Careers</h3>
							<FontAwesomeIcon icon="angle-down" size="2x" className="drop-down" />
						</div>
						{showCareers && (
							<NavItem items={careersLinks} className="footer-drop-down" />
						)}
					</div>
					<div className="social-impact" onClick={handleShowSocial}>
						<div className="social-title title">
							<h3>Social Impact</h3>
							<FontAwesomeIcon icon="angle-down" size="2x" className="drop-down" />
						</div>
						{showSocial && (
							<NavItem items={socialImpactLinks} className="footer-drop-down" />
						)}
					</div>
					<div className="partners" onClick={handleShowPartners}>
						<div className="title">
							<h3>For Business Partners</h3>
							<FontAwesomeIcon icon="angle-down" size="2x" className="drop-down" />
						</div>
						{showPartners && (
							<NavItem items={partnersLinks} className="footer-drop-down" />
						)}
					</div>
					<div className="order-pickup" onClick={handleShowOrder}>
						<div className="order title">
							<h3>Order and Pickup</h3>
							<FontAwesomeIcon icon="angle-down" size="2x" className="drop-down" />
						</div>
						{showOrder && (
							<NavItem items={orderAndPickLinks} className="footer-drop-down" />
						)}
					</div>
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
				<div className="container">
					<NavItem items={privacyAndTermsLink} />
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
