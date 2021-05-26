import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<footer>
			<div className="footer-container ">
				<div className="footer-links container">
					<div className="about">
						<div className="about-title title">
							<h3>About Us</h3>
							<FontAwesomeIcon icon="angle-down" size="2x" className="drop-down" />
						</div>
						<ul>
							<li>
								<a href="/">Our Heritage</a>
							</li>
							<li>
								<a href="/">Our Coffee</a>
							</li>
							<li>
								<a href="/">Stories and News</a>
							</li>
							<li>
								<a href="/">Investor Relations</a>
							</li>
							<li>
								<a href="/">Policies and Standards</a>
							</li>
							<li>
								<a href="/">Customer Service</a>
							</li>
						</ul>
					</div>
					<div className="careers">
						<div className="title career-title">
							<h3>Careers</h3>
							<FontAwesomeIcon icon="angle-down" size="2x" className="drop-down" />
						</div>
						<ul>
							<li>
								<a href="/">Culture and Values</a>
							</li>
							<li>
								<a href="/">Inclusion,Diversity and Equity</a>
							</li>
							<li>
								<a href="/">College Achievement Plan</a>
							</li>
							<li>
								<a href="/">U.S Careers</a>
							</li>
							<li>
								<a href="/">International Careers</a>
							</li>
						</ul>
					</div>
					<div className="social-impact">
						<div className="social-title title">
							<h3>Social Impact</h3>
							<FontAwesomeIcon icon="angle-down" size="2x" className="drop-down" />
						</div>

						<ul>
							<li>
								<a href="/">Ethical Sourcing</a>
							</li>
							<li>
								<a href="/">Leading in Sustainabilty</a>
							</li>
							<li>
								<a href="/">Strengthening Communities</a>
							</li>
							<li>
								<a href="/">Creating Opportunities</a>
							</li>
							<li>
								<a href="/">Global Social Impact Report</a>
							</li>
						</ul>
					</div>
					<div className="partners">
						<div className="title">
							<h3>For Business Partners</h3>
							<FontAwesomeIcon icon="angle-down" size="2x" className="drop-down" />
						</div>

						<ul>
							<li>
								<a href="/">Landlord Support Center</a>
							</li>
							<li>
								<a href="/">Suppliers</a>
							</li>
							<li>
								<a href="/">Corporate Gift Card Sales</a>
							</li>
							<li>
								<a href="/">Office and Foodservice Coffee</a>
							</li>
						</ul>
					</div>
					<div className="order-pickup">
						<div className="order title">
							<h3>Order and Pickup</h3>
							<FontAwesomeIcon icon="angle-down" size="2x" className="drop-down" />
						</div>

						<ul>
							<li>
								<a href="/">Order on the App</a>
							</li>
							<li>
								<a href="/">Order on the Web</a>
							</li>
							<li>
								<a href="/">Delivery</a>
							</li>
							<li>
								<a href="/">Order and Pickup Options</a>
							</li>
							<li>
								<a href="/">Explore and Find Coffee for Home</a>
							</li>
						</ul>
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
				<ul className="container">
					<li>
						<a href="/">Privacy Policy</a>
					</li>
					<li>
						<a href="/">Terms of Use</a>
					</li>
					<li>
						<a href="/">CA Supply Chain Act</a>
					</li>
					<li>
						<a href="/">Submit Your Idea</a>
					</li>
					<li>
						<a href="/">Cookie Preferences</a>
					</li>
				</ul>
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
