import React from "react";
import NavBar from "../components/nav/NavBar";
import FooterSignup from "../components/footer/FooterSignup";
import Input from "../components/input/Input";

function JoinNow() {
	return (
		<div className="join-now">
			<header>
				<NavBar />
			</header>
			<main className="container">
				<section className="join-now-heading">
					<h3>Create an account</h3>
					<h4>STARBUCKS® REWARDS</h4>
					<p>
						Join Starbucks Rewards to earn Stars for free food and drinks, any way you
						pay. Get access to mobile ordering, a birthday Reward, and moremore.
					</p>
				</section>

				<form action="">
					<div className="username">
						<h4>Personal Information</h4>

						{/* <input
							type="text"
							name="firstname"
							id="firstname"
							placeholder="First Name"
						/> */}
						<Input type="text" name="firstname" placeholder="First Name" />
						<br />
						<Input type="text" name="lastname" placeholder="Last Name" />
					</div>
					<div className="accout-security">
						<h4>Account Security</h4>
						<Input type="email" name="email" placeholder="Email Address" />
						<br />
						<Input type="password" name="password" placeholder="Password" />
					</div>
					<div className="have-giftcard">
						<div className="title">
							<h5>Already have a Starbuck gift card</h5>
							<p>Add your gift card to earn Stars when you pay and order ahead. </p>
						</div>

						<div className="have-giftcard-input">
							<Input
								type="number"
								name="card-number"
								placeholder="Card number (16 digits)"
							/>
							<br />
							<Input type="number" name="security-code" placeholder="Security code" />
						</div>
					</div>

					<div className="keep-up-to-date">
						<h5>COLLECT MORE STARS & EARN REWARDS</h5>
						<p>
							Email is a great way to know about offers and what’s new from Starbucks.
						</p>
						<div className="email-subscription">
							<input type="checkbox" name="" id="" />

							<label>
								<p>Yes, I’d like email from Starbucks</p>
								<span>
									Know about initiatives, announcements and product offers.
								</span>
							</label>
						</div>
						<div className="terms-of-use">
							<div className="heading">
								<h5>TERMS OF USE</h5>
							</div>
							<div className="terms-of-use-input">
								<input type="checkbox" name="terms-of-use" id="terms-of-use" />
								<label>
									I agree to the Starbucks® Rewards Terms opens and the Starbucks
									Card Terms opens in new window.
								</label>
							</div>
						</div>
					</div>
					<div className="button-submit">
						<button type="submit">Create account</button>
					</div>
				</form>
			</main>
			<FooterSignup />
		</div>
	);
}

export default JoinNow;
