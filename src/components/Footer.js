import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItem from "./NavComponents/NavItem";
import React from "react";
import FooterLink from "./footerComponent/FooterLink";

const Footer = () => {
	const privacyAndTermsLink = [
		"Privacy Policy",
		"Terms of Use",
		"CA Supply Chain Act",
		"Submit Your Idea",
		"Cookie Preferences",
	];

	const footerLinks = [
		{
			title: "About Us",
			links: [
				"Our Heritage",
				"Our Coffee",
				"Stories and News",
				"Investor Relations",
				"Policies and Standard",
				"Customer Service",
			],
		},
		{
			title: "Careers",
			links: [
				"Culture and Values",
				"Inclusion, Diversity and Equity",
				"College Achievement Plan",
				"U.S Careers",
				"International Careers",
			],
		},
		{
			title: "Social Impact",
			links: [
				"Ethical Sourcing",
				"Leading in Sustainablity",
				"Strengthening Communities",
				"Creating Opportunities",
				"Global Social Impact Report",
			],
		},
		{
			title: "For Business Partners",
			links: [
				"Landlord Support Center",
				"Suppliers",
				"Corporate Gift Card Sales",
				"Office and Foodservice Coffee",
			],
		},
		{
			title: "Order and Pickup",
			links: [
				"Order on the App",
				"Order on the Web",
				"Delivery",
				"Order and Pickup Options",
				"Explore and Find Coffe for Home",
			],
		},
	];

	return (
		<footer>
			<div className="footer-links-container ">
				<div className="footer-links container">
					<FooterLink items={footerLinks} />
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
