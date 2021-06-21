import NavBar from "../components/nav/NavBar";
import BulkGiftCard from "../images/giftcards/bulk-gift-cards.webp";
import giftCardContent from "../components/giftcard/giftcardContent";
import DisplayGiftCard from "../components/giftcard/DisplayGiftCard";
import Footer from "../components/footer/Footer";
const GiftCard = () => {
	return (
		<>
			<div className="gift-card-wrapper">
				<header>
					<div className="giftcard-nav">
						<NavBar />
					</div>
				</header>
				<main>
					<DisplayGiftCard
						heading="FEATURED"
						path="/gift/featuredGiftCard"
						giftcard={giftCardContent.featuredGiftCard}
						className="featured-giftcards"
					/>

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
					<DisplayGiftCard
						heading="THANK YOU"
						path="/gift/thankYouGiftCard"
						className="thank-you-giftcard"
						giftcard={giftCardContent.thankYouGiftCard}
					/>
					<DisplayGiftCard
						heading="BIRTHDAY"
						path="/gift/birthdayGiftCard"
						className="birthday-giftcard"
						giftcard={giftCardContent.birthdayGiftCard}
					/>
					<DisplayGiftCard
						heading="GRADUATION"
						path="/gift/graduationGiftCard"
						className="graduation-giftcard"
						giftcard={giftCardContent.graduationGiftCard}
					/>
					<DisplayGiftCard
						heading="PRIDE"
						path="/gift/prideGiftCard"
						className="pride-giftcard"
						giftcard={giftCardContent.prideGiftCard}
					/>
					<DisplayGiftCard
						heading="APPRICIATION"
						path="/gift/appreciationGiftCard"
						className="appreciation-giftcard"
						giftcard={giftCardContent.appreciationGiftCard}
					/>

					<section className="teacher-appreciation-giftcard container">
						<div className="heading">
							<h3>TEACHER APPRECIATION</h3>
						</div>
						<div className="giftcards">
							<figure>{giftCardContent.teacherAppreciationGiftCard}</figure>
						</div>
					</section>
					<DisplayGiftCard
						heading="LOVE"
						path="/gift/loveGiftCard"
						className="love-giftcard"
						giftcard={giftCardContent.loveGiftCard}
					/>
					<DisplayGiftCard
						heading="RECOGNITION"
						path="/gift/recognitionGiftCard"
						className="recognition-giftcard"
						giftcard={giftCardContent.recognitonGiftCard}
					/>
					<DisplayGiftCard
						heading="ENCOURAGEMENT"
						path="/gift/encouragementGiftCard"
						className="encouragement-giftcard"
						giftcard={giftCardContent.encouragementGiftCard}
					/>
					<DisplayGiftCard
						heading="WORKPLACE"
						path="/gift/workplaceGiftCard"
						className="workpalce-giftcard"
						giftcard={giftCardContent.workplaceGiftCard}
					/>

					<section className="anniversary-giftcard container">
						<div className="heading">
							<h3>50TH ANNIVERSARY</h3>
						</div>
						<div className="giftcards">
							<figure>{giftCardContent.anniversaryGiftCard}</figure>
						</div>
					</section>
					<DisplayGiftCard
						heading="COMMUNITY"
						path="/gift/communityGiftCard"
						className="community-giftcard"
						giftcard={giftCardContent.communityGiftCard}
					/>

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
										appreciation towards your customers, clients and team
										members.
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
								Use the links below to manage eGifts you have sent or received, or
								view our full Card Terms & Conditions.
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
			<Footer />
		</>
	);
};

export default GiftCard;
