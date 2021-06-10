import NavBar from "../components/nav/NavBar";
import BulkGiftCard from "../images/giftcards/bulk-gift-cards.webp";
import AliceCarousel from "react-alice-carousel";
import giftCardContent from "../components/giftcard/giftcardContent";
const GiftCard = () => {
	const responsive = {
		0: { items: 3.2 },
		568: { items: 3.5 },
		1024: { items: 4.5 },
	};

	return (
		<div className="gift-card-wrapper">
			<header>
				<div className="giftcard-nav">
					<NavBar />
				</div>
			</header>
			<main>
				<section className="featured-giftcards container">
					<div className="heading ">
						<h3>FEATURED</h3>
						<button>See all</button>
					</div>
					<div className="giftcards">
						<AliceCarousel
							items={giftCardContent.featuredGiftCard}
							responsive={responsive}
							controlsStrategy="alternate"
							mouseTracking
						/>
					</div>
				</section>
				<section className="check-balance">
					<div className="check-balance-content container">
						<div className="title">
							<h2>Got a gift card?</h2>
							<p>
								Earn 2<span>★</span> per $1
							</p>
						</div>
						<div className="check-bal-button">
							<button className="blackbutton">Check Balance</button>
							<button>Add Card</button>
						</div>
					</div>
				</section>
				<section className="father-day-giftcard container">
					<div className="heading">
						<h3>FATHER'S DAY</h3>
					</div>
					<div className="giftcards">
						<figure>{giftCardContent.fathersDayGiftCard}</figure>
					</div>
				</section>
				<section className="thank-you-giftcard container">
					<div className="heading">
						<h3>THANK YOU</h3>
						<button>See all</button>
					</div>
					<div className="giftcards">
						<AliceCarousel
							items={giftCardContent.thankYouGiftCard}
							responsive={responsive}
							controlsStrategy="alternate"
							mouseTracking
						/>
					</div>
				</section>
				<section className="birthday-giftcard container">
					<div className="heading">
						<h3>BIRTHDAY</h3>
						<button>See all</button>
					</div>
					<div className="giftcards">
						<AliceCarousel
							items={giftCardContent.birthdayGiftCard}
							responsive={responsive}
							controlsStrategy="alternate"
							mouseTracking
						/>
					</div>
				</section>
				<section className="graduation-giftcard container">
					<div className="heading">
						<h3>GRADUATION</h3>
						<button>See all</button>
					</div>
					<div className="giftcards">
						<AliceCarousel
							items={giftCardContent.graduationGiftCard}
							responsive={responsive}
							controlsStrategy="alternate"
							mouseTracking
						/>
					</div>
				</section>
				<section className="pride-giftcard container">
					<div className="heading">
						<h3>PRIDE</h3>
						<button>See all</button>
					</div>
					<div className="giftcards">
						<AliceCarousel
							items={giftCardContent.prideGiftCard}
							responsive={responsive}
							controlsStrategy="alternate"
							mouseTracking
						/>
					</div>
				</section>
				<section className="appreciation-giftcard container">
					<div className="heading">
						<h3>APPRECIATION</h3>
						<button>See all</button>
					</div>
					<div className="giftcards">
						<AliceCarousel
							items={giftCardContent.appreciationGiftCard}
							responsive={responsive}
							controlsStrategy="alternate"
							mouseTracking
						/>
					</div>
				</section>
				<section className="teacher-appreciation-giftcard container">
					<div className="heading">
						<h3>TEACHER APPRECIATION</h3>
					</div>
					<div className="giftcards">
						<figure>{giftCardContent.teacherAppreciationGiftCard}</figure>
					</div>
				</section>
				<section className="love-giftcard container">
					<div className="heading">
						<h3>LOVE</h3>
						<button>See all</button>
					</div>
					<div className="giftcards">
						<AliceCarousel
							items={giftCardContent.loveGiftCard}
							responsive={responsive}
							controlsStrategy="alternate"
							mouseTracking
						/>
					</div>
				</section>
				<section className="recogniton-giftcard container">
					<div className="heading">
						<h3>RECOGNITION</h3>
						<button>See all</button>
					</div>
					<div className="giftcards">
						<AliceCarousel
							items={giftCardContent.recognitonGiftCard}
							responsive={responsive}
							controlsStrategy="alternate"
							mouseTracking
						/>
					</div>
				</section>
				<section className="encouragement-giftcard container">
					<div className="heading">
						<h3>ENCOURAGEMENT</h3>
						<button>See all</button>
					</div>
					<div className="giftcards">
						<AliceCarousel
							items={giftCardContent.encouragementGiftCard}
							responsive={responsive}
							controlsStrategy="alternate"
							mouseTracking
						/>
					</div>
				</section>
				<section className="workplace-giftcard container">
					<div className="heading">
						<h3>WORKPLACE</h3>
						<button>See all</button>
					</div>
					<div className="giftcards">
						<AliceCarousel
							items={giftCardContent.workplaceGiftCard}
							responsive={responsive}
							controlsStrategy="alternate"
							mouseTracking
						/>
					</div>
				</section>
				<section className="anniversary-giftcard container">
					<div className="heading">
						<h3>50TH ANNIVERSARY</h3>
					</div>
					<div className="giftcards">
						<figure>{giftCardContent.anniversaryGiftCard}</figure>
					</div>
				</section>
				<section className="community-giftcard container">
					<div className="heading">
						<h3>COMMUNITY</h3>
						<button>See all</button>
					</div>
					<div className="giftcards">
						<AliceCarousel
							items={giftCardContent.communityGiftCard}
							responsive={responsive}
							controlsStrategy="alternate"
							mouseTracking
						/>
					</div>
				</section>
				<section className="anytime-giftcard container">
					<div className="heading">
						<h3>ANYTIME</h3>
					</div>
					<div className="giftcards">
						<figure>{giftCardContent.anyTimeGiftCard}</figure>
					</div>
				</section>
				<section className="bulk-giftcard">
					<div className="container">
						<figure>
							<img src={BulkGiftCard} alt="bulk gift card" />
							<figcaption>
								<h2>Gift Cards in Bulk</h2>
								<p>
									There’s an easier way to buy Starbucks Cards in bulk! Give a
									Starbucks Card to gift, reward, incentivize, or show
									appreciation towards your customers, clients and team members.
								</p>
								<button>Shop now</button>
							</figcaption>
						</figure>
					</div>
				</section>
				<div className="giftcard-support">
					<div className="container">
						<h3>GIFT CARD SUPPORT</h3>
						<p>
							Use the links below to manage eGifts you have sent or received, or view
							our full Card Terms & Conditions.
						</p>
						<section>
							<button className="e-gift">eGift Support</button>
							<button>See Terms & Conditions</button>
							<button>eGift FAQS</button>
						</section>
					</div>
				</div>
			</main>
		</div>
	);
};

export default GiftCard;
