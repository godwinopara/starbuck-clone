import React from "react";

function FooterSignup() {
	return (
		<footer className="footer-signup">
			<div className="footer-sign-up-wrapper container">
				<div className="flex">
					<div className="find-store-btn">
						<button>Find a store</button>
					</div>
					<ul className="footer-sign-up-links">
						<li>Responsibility</li>
						<li>Web Accessibility</li>
						<li>Privacy Policy</li>
						<li>Terms of Use</li>
						<li>Cookie Preferences</li>
					</ul>
				</div>
				<div className="copy-right">
					<p>&copy;2021 Starbucks</p>
				</div>
			</div>
		</footer>
	);
}

export default FooterSignup;
