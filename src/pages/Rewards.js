import NavBar from "../components/nav/NavBar";
import rewardContent from "../components/reward/rewardContent";
import Tiers from "../components/reward/Tiers";
import ListItems from "../components/reward/ListItems";
import number1Image from "../images/number1.webp";
import number2Image from "../images/number2.webp";
import number3Image from "../images/number3.webp";
import ListPaymentMethods from "../components/reward/ListPaymentMethods";
import Footer from "../components/footer/Footer";
const Rewards = () => {
	return (
		<>
			<div className="rewards-container">
				<header>
					<div className="reward-nav">
						<NavBar />
					</div>
					<div className="reward-sub-nav">
						<p className="container">STARBUCKS® REWARDS</p>
						<button className="join-app">Join in the app</button>
					</div>
				</header>
				<main>
					<section className="reward-main">
						<div className="reward-main-content desktop container">
							<h1>
								FREE COFFEE
								<br />
								IS A TAP AWAY
							</h1>
							<span>Join now to start earning Rewards</span>
							<button>Join Now</button>
							<span>Or join in the app for best experience</span>
						</div>
						<div className="reward-main-content mobile">
							<h1>
								FREE COFFEE
								<br />
								IS A TAP AWAY
							</h1>
							<span>Join now to start earning Rewards</span>
							<button>Join in the app</button>
							<span className="online">Or join online</span>
						</div>
					</section>
					<section className="getting-started">
						<div className="getting-started-header container">
							<h2>Getting started is easy</h2>
							<p>Earn Stars and get rewarded in a few easy steps.</p>
						</div>
						<div className="getting-started-content container">
							<div className="first-step account-steps">
								<div className="account-step-img">
									<img src={number1Image} alt="number 1" />
								</div>
								<div className="first-step-content">
									<div>
										<h2 className="header-1">Create an account</h2>
										<h2 className="header-2">Download the Starbucks® app</h2>
										<p className="para1">
											To get started, join now. You can also join in the app
											to get access to the full range of Starbucks® Rewards
											benefits.
										</p>
										<p className="para2">
											Join in the app to get access to the full range of
											Starbucks® Rewards benefits. You can also join online.
										</p>
									</div>
								</div>
							</div>
							<div className="second-step account-steps">
								<div className="account-step-img">
									<img src={number2Image} alt="number 2" />
								</div>
								<div className="second-step-content">
									<h2>Order and pay how you’d like</h2>
									<p>
										Use cash, credit/debit card or save some time and pay right
										through the app. You’ll collect Stars all ways. Learn how
									</p>
								</div>
							</div>
							<div className="third-step account-steps">
								<div className="account-step-img">
									<img src={number3Image} alt="number 3" />
								</div>
								<div className="third-step-content">
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
					<section className="favorite-tiers">
						<Tiers />
					</section>
					<section className="starbuck-extras container">
						<div className="starbuck-extras-heading">
							<h2>Endless Extras</h2>
							<p>
								Joining Starbucks® Rewards means unlocking access to exclusive
								benefits. Say hello to easy ordering, tasty Rewards and—yes, free
								coffee.
							</p>
						</div>
						<div className="starbuck-extras-details">
							<ListItems itemToList={rewardContent.freePackages} />
						</div>
					</section>
					<section className="payment-method">
						<div className="payment-method-heading container">
							<h2>Cash or card, you earn Stars</h2>
							<p>
								No matter how you pay, you can earn Stars with your morning coffee.
								Those Stars add up to (really delicious) Rewards.
							</p>
						</div>

						<div className="payment-method-details">
							<div className="pay-as-you-go">
								<div className="title">
									<h3>1★ Per dollar</h3>
									<p>Pay as you go</p>
								</div>
								<div className="details container">
									<ListPaymentMethods paymentType={rewardContent.scanAndPay} />
									<ListPaymentMethods paymentType={rewardContent.savePayment} />
								</div>
							</div>
							<div className="fund-app">
								<div className="title">
									<h3>2★ Per dollar</h3>
									<p>Add funds in the app</p>
								</div>
								<div className="details container">
									<ListPaymentMethods paymentType={rewardContent.preLoad} />
									<ListPaymentMethods paymentType={rewardContent.registerCard} />
								</div>
							</div>
							<div className="credit-card">
								<div className="title">
									<h3>Up to 3★ Per dollar</h3>
									<p>With Starbucks® Rewards Visa® Card</p>
								</div>
								<div className="details container">
									<ListPaymentMethods paymentType={rewardContent.creditCard} />
								</div>
							</div>
						</div>
					</section>
					<section className="redeem-starbuck-code">
						<div className="starbuck-code container">
							<div className="starbuck-code-heading">
								<h2>Star Codes</h2>
								<p>
									Yesssss. You’ve got Stars in your hand. Enter your code here and
									we’ll add Stars to your account.
								</p>
							</div>
							<div className="starbuck-code-input">
								<div className="input-text">
									<label htmlFor="input">Enter your Star Code</label>
									<input type="text" />
								</div>
								<div className="input-button">
									<button>Submit</button>
								</div>
							</div>
							<p className="starbuck-receipt">
								Have a receipt but don't have a code?
								<br />
								Go to starbucks-stars.com opens in new window to upload your receipt
								and collect your Stars.
							</p>
						</div>
						<div className="questions">
							<div className="question-content container">
								<h2>Questions?</h2>
								<p>
									We want to help in any way we can. You can ask your barista
									anytime or
									<br />
									we’ve answered the most commonly asked questions right over here
									opens in new window.
								</p>
							</div>
						</div>
					</section>
					<section className="reward-terms-and-conditions">
						<div className="restrictions container">
							<p>At participating stores. Restrictions apply.</p>
						</div>
						<div className="terms-and-conditions container">
							<div className="earning-stars-terms">
								<h3>EARNING STARS</h3>
								<p>
									Stars cannot be earned on purchases of alcohol, Starbucks Cards
									or Starbucks Card reloads.
								</p>
								<p>
									Earn 1 Star per $1 spent when you scan your member barcode in
									the app, then pay with cash, credit/debit cards or mobile
									wallets at participating stores. You can also earn 1 Star per $1
									spent when you link a payment method and pay directly through
									the app.
								</p>
								<p>
									Earn 2 Stars per $1 spent when you load funds and pay with your
									digital Starbucks Card in the app. You can also earn 2 Stars per
									$1 spent when you pay in-person at a participating store with
									your registered physical Starbucks Card or scan your member
									barcode in the app, and then use any physical Starbucks Card
									(regardless of whether it is registered) to complete the
									purchase.
								</p>
							</div>
							<div className="terms-of-use">
								<h3>TERMS OF USE</h3>
								<p>For full program details visit starbucks.com/rewards/terms</p>
								<p>
									* Earn 1 Star per $1 when digitally loading your Starbucks Card
									with your Starbucks® Rewards Visa® Card: See your Card Rewards
									Program Agreement for more details.
								</p>
								<p>
									Starbucks® Rewards benefits are available at participating
									Starbucks stores. Not all stores have the ability to honor
									Rewards at this time. Visit the Starbucks Store Locator opens in
									new window and search for locations honoring “Redeem Rewards”.
								</p>
								<p>
									Deposit and credit card products provided by JPMorgan Chase
									Bank, N.A. Member FDIC
								</p>
							</div>
							<div className="benefits">
								<h3>BENEFITS</h3>
								<p>
									Free refills available during same in-store visit only. To
									qualify for the Birthday Reward, you must have made at least one
									Star-earning transaction.
								</p>
							</div>
							<div className="redeeming-rewards">
								<h3>REDEEMING REWARDS</h3>
								<p>
									Rewards cannot be redeemed for alcoholic beverages or
									multi-serve items. Not all stores honor tiered Rewards. Select
									stores redeem 150 Stars for free food or drink items only.
								</p>
							</div>
						</div>
					</section>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default Rewards;
