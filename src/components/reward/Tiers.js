import React, { useState } from "react";
import ListStar from "./ListStar";
import rewardTiers1 from "../../images/reward-tiers1.webp";
import rewardTiers2 from "../../images/reward-tiers2.webp";
import rewardTiers3 from "../../images/reward-tiers3.webp";
import rewardTiers4 from "../../images/reward-tiers4.webp";
import rewardTiers5 from "../../images/reward-tiers5.webp";
const Tiers = () => {
	const [tier25, settier25] = useState(true);
	const [tier50, settier50] = useState(false);
	const [tier150, settier150] = useState(false);
	const [tier200, settier200] = useState(false);
	const [tier400, settier400] = useState(false);

	const handleClickTier25 = () => {
		settier25(true);
		settier50(false);
		settier150(false);
		settier200(false);
		settier400(false);
	};
	const handleClickTier50 = () => {
		settier25(false);
		settier50(true);
		settier150(false);
		settier200(false);
		settier400(false);
	};
	const handleClickTier150 = () => {
		settier25(false);
		settier50(false);
		settier150(true);
		settier200(false);
		settier400(false);
	};
	const handleClickTier200 = () => {
		settier25(false);
		settier50(false);
		settier150(false);
		settier200(true);
		settier400(false);
	};
	const handleClickTier400 = () => {
		settier25(false);
		settier50(false);
		settier150(false);
		settier200(false);
		settier400(true);
	};

	return (
		<div className="tiers-wrapper">
			<div className="tiers-heading">
				<h2>Get your favorites for free</h2>
			</div>
			<div className="tiers-star">
				<div className={`stars ${tier25 ? "active-tier" : ""}`} onClick={handleClickTier25}>
					<h3>25</h3>
					<span>★</span>
				</div>
				<div className={`stars ${tier50 ? "active-tier" : ""}`} onClick={handleClickTier50}>
					<h3>50</h3>
					<span>★</span>
				</div>
				<div
					className={`stars ${tier150 ? "active-tier" : ""}`}
					onClick={handleClickTier150}
				>
					<h3>150</h3>
					<span>★</span>
				</div>
				<div
					className={`stars ${tier200 ? "active-tier" : ""}`}
					onClick={handleClickTier200}
				>
					<h3>200</h3>
					<span>★</span>
				</div>
				<div
					className={`stars ${tier400 ? "active-tier" : ""}`}
					onClick={handleClickTier400}
				>
					<h3>400</h3>
					<span>★</span>
				</div>
			</div>
			<div className="tiers-images">
				{tier25 && (
					<figure>
						<img src={rewardTiers1} alt="" id="25" />
						<figcaption>
							<h2>Customize your drink</h2>
							<p>
								Make your drink just right with an extra espresso shot, dairy
								substitute or a dash of your favorite syrup.
							</p>
						</figcaption>
					</figure>
				)}

				{tier50 && (
					<figure>
						<img src={rewardTiers2} alt="" id="50" />
						<figcaption>
							<h2>Brewed hot coffee, bakery item or hot tea</h2>
							<p>
								Pair coffee cake or an almond croissant with your fresh cup of hot
								brew.
							</p>
						</figcaption>
					</figure>
				)}
				{tier150 && (
					<figure>
						<img src={rewardTiers3} alt="" id="150" />
						<figcaption>
							<h2>Handcrafted drink, hot breakfast or parfait</h2>
							<p>
								Have a really good morning with a breakfast sandwich, oatmeal or
								your favorite drink.
							</p>
						</figcaption>
					</figure>
				)}
				{tier200 && (
					<figure>
						<img src={rewardTiers4} alt="" id="200" />
						<figcaption>
							<h2>Salad, sandwich or protein box</h2>
							<p>
								Nourish your day with a hearty Chipotle Chicken Wrap or Eggs &
								Cheese Protein Box
							</p>
						</figcaption>
					</figure>
				)}
				{tier400 && (
					<figure>
						<img src={rewardTiers5} alt="" id="400" />
						<figcaption>
							<h2>Select merchandise or at-home coffee</h2>
							<p>
								Take home a signature cup, a bag of coffee or your choice of select
								coffee accessories.
							</p>
						</figcaption>
					</figure>
				)}
			</div>
		</div>
	);
};

export default Tiers;
