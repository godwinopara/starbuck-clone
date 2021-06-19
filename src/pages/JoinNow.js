import React from "react";

function JoinNow() {
	return (
		<div className="joinNow">
			<h2>Create an account</h2>
			<h3>STARBUCKS® REWARDS</h3>
			<p>
				Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get
				access to mobile ordering, a birthday Reward, and moremore.
			</p>

			<form action="">
				<div className="username">
					<label>Personal Information</label>

					<input type="text" name="firstname" id="firstname" placeholder="First Name" />
					<br />
					<input type="text" name="lastname" id="lastname" placeholder="Last Name" />
				</div>
				<div className="accout-security">
					<label htmlFor="account-security">
						<input type="email" name="email" id="email" placeholder="Email Address" />
						<br />
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
						/>
					</label>
				</div>
				<div className="sign-giftcard"></div>
			</form>
		</div>
	);
}

export default JoinNow;
