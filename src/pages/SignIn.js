import React from "react";
import FooterSignup from "../components/footer/FooterSignup";
import NavBar from "../components/nav/NavBar";
import Input from "../components/input/Input";

function SignIn() {
	return (
		<div className="sign-in">
			<header id="sign-in-nav">
				<NavBar />
			</header>
			<main className="container">
				<h1>Sign in or create an account</h1>

				<form>
					<Input type="text" name="username" placeholder="Username or email address" />

					<br />

					<Input type="password" name="password" placeholder="Password" />
					<div className="keep-me-sign-in">
						<label htmlFor="checkbox">
							<input type="checkbox" />
							<p>
								Keep me signed in. <span>Details</span>
							</p>
						</label>
					</div>
					<div className="forget-account-details">
						<p>Forget your username</p>
						<p>Forget your password</p>
					</div>
					<div className="sign-in-btn">
						<input type="button" value="Sign in" />
					</div>
				</form>

				<div className="join-starbuck">
					<h4>JOIN STARBUCKS® REWARDS</h4>
					<p>
						Join Starbucks® Rewards to earn free food and drinks, get free refills, pay
						and order with your phone, and more.
					</p>
					<input type="button" value="Join now" />
				</div>
			</main>
			<footer className="sign-in-footer">
				<FooterSignup />
			</footer>
		</div>
	);
}

export default SignIn;
