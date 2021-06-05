import NavBar from "../components/nav/NavBar";
import ListStar from "../components/reward/ListStar";
import rewardContent from "../components/reward/rewardContent";
import ListItems from "../components/reward/ListItems";
import number1Image from "../images/number1.webp";
import number2Image from "../images/number2.webp";
import number3Image from "../images/number3.webp";

const Rewards = () => {
	return (
		<div className="rewards-container">
			<header>
				<div className="reward-header-wrapper">
					<div className="reward-nav">
						<NavBar />
					</div>
					<div className="reward-sub-nav">
						<p className="container">STARBUCKS® REWARDS</p>
					</div>
				</div>
			</header>
			<main>
				<section className="reward-main">
					<div className="reward-main-content container">
						<h1>
							FREE COFFEE
							<br />
							IS A TAP AWAY
						</h1>
						<span>Join now to start earning Rewards</span>
						<button>Join Now</button>
						<span>Or join in the app for best experience</span>
					</div>
				</section>
				<section className="getting-started">
					<div className="getting-started-header">
						<h2>Getting started is easy</h2>
						<p>Earn Stars and get rewarded in a few easy steps.</p>
					</div>
					<div className="getting-started-content">
						<div className="first-step">
							<img src={number1Image} alt="number 1" />
							<div className="first-step-content">
								<h2>Create an account</h2>
								<p>
									To get started, join now. You can also join in the app to get
									access to the full range of Starbucks® Rewards benefits.
								</p>
							</div>
						</div>
						<div className="first-step">
							<img src={number2Image} alt="number 2" />
							<div className="first-step-content">
								<h2>Order and pay how you’d like</h2>
								<p>
									Use cash, credit/debit card or save some time and pay right
									through the app. You’ll collect Stars all ways. Learn how
								</p>
							</div>
						</div>
						<div className="first-step">
							<img src={number3Image} alt="number 3" />
							<div className="first-step-content">
								<h2>Earn Stars, get Rewards</h2>
								<p>
									As you earn Stars, you can redeem them for Rewards—like free
									food, drinks, and more. Start redeeming with as little as 25
									Stars!
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="get-favorite">
					<h2>Get your favorites for free</h2>
					<div className="favorite-products">
						<div className="favorite-total-stars">
							<ListStar stars={[25, 50, 150, 200, 400]} />
						</div>
					</div>
				</section>
				<section className="starbuck-extras">
					<div className="starbuck-extras-heading">
						<h2>Endless Extras</h2>
						<p>
							Joining Starbucks® Rewards means unlocking access to exclusive benefits.
							Say hello to easy ordering, tasty Rewards and—yes, free coffee.
						</p>
					</div>
					<div className="starbuck-extras-details">
						<ListItems itemToList={rewardContent.freePackages} />
					</div>
				</section>
				<section className="payment-method">
					<div className="payment-method-heading">
						<h2>Cash or card, you earn Stars</h2>
						<p>
							No matter how you pay, you can earn Stars with your morning coffee.
							Those Stars add up to (really delicious) Rewards.
						</p>
						<div className="payment-method-details"></div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Rewards;
