import NavBar from "../components/nav/NavBar";
import BulkGiftCard from "../images/giftcards/bulk-gift-cards.webp";
const GiftCard = () => {
	return (
		<div className="gift-card-wrapper">
			<header>
				<div className="giftcard-nav">
					<NavBar />
				</div>
			</header>
			<main>
				<section className="featured-giftcard">
					<div className="featured-heading">
						<h3>FEATURED</h3>
						<button>See all</button>
					</div>
				</section>
				<section className="check-balance">
					<h2>Got a gift card?</h2>
					<p>
						Earn 2<span>★</span> per $1
					</p>
					<div className="check-bal-button">
						<button>Check Balance</button>
						<button>Add Card</button>
					</div>
				</section>
				<section className="father-day-giftcard">
					<h3>FATHER'S DAY</h3>
				</section>
				<section className="thank-you-giftcard">
					<div className="thank-you-giftcard-heading">
						<h3>THANK YOU</h3>
						<button>See all</button>
					</div>
				</section>
				<section className="birthday-giftcard">
					<div className="birthday-giftcard-heading">
						<h3>BIRTHDAY</h3>
						<button>See all</button>
					</div>
				</section>
				<section className="graduation-giftcard">
					<div className="gradution-giftcard-heading">
						<h3>GRADUATION</h3>
						<button>See all</button>
					</div>
				</section>
				<section className="pride-giftcard">
					<div className="pride-giftcard-heading">
						<h3>PRIDE</h3>
						<button>See all</button>
					</div>
				</section>
				<section className="appreciation-giftcard">
					<div className="appreciation-giftcard-heading">
						<h3>APPRECIATION</h3>
						<button>See all</button>
					</div>
				</section>
				<section className="teacher-appreciation-giftcard">
					<h3>TEACHER APPRECIATION</h3>
				</section>
				<section className="love-giftcard">
					<div className="love-giftcard-heading">
						<h3>LOVE</h3>
						<button>See all</button>
					</div>
				</section>
				<section className="recogniton-giftcard">
					<div className="recogniton-giftcard-heading">
						<h3>RECOGNITION</h3>
						<button>See all</button>
					</div>
				</section>
				<section className="encouragement-giftcard">
					<div className="encouragement-giftcard-heading">
						<h3>ENCOURAGEMENT</h3>
						<button>See all</button>
					</div>
				</section>
				<section className="workplace-giftcard">
					<div className="workplace-giftcard-heading">
						<h3>WORKPLACE</h3>
						<button>See all</button>
					</div>
				</section>
				<section className="anniversary-giftcard">
					<h3>50TH ANNIVERSARY</h3>
				</section>
				<section className="community-giftcard">
					<div className="community-giftcard-heading">
						<h3>COMMUNITY</h3>
						<button>See all</button>
					</div>
				</section>
				<section className="anytime-giftcard">
					<h3>ANYTIME</h3>
				</section>
				<section className="bulk-giftcard">
					<figure>
						<img src={BulkGiftCard} alt="bulk gift card" />
						<figcaption>
							<h2>Gift Cards in Bulk</h2>
							<p>
								There’s an easier way to buy Starbucks Cards in bulk! Give a
								Starbucks Card to gift, reward, incentivize, or show appreciation
								towards your customers, clients and team members.
							</p>
							<button>Shop now</button>
						</figcaption>
					</figure>
				</section>
				<div className="giftcard-support">
					<h3>GIFT CARD SUPPORT</h3>
					<p>
						Use the links below to manage eGifts you have sent or received, or view our
						full Card Terms & Conditions.
					</p>
					<section>
						<button>eGift Support</button>
						<button>See Terms & Conditions</button>
						<button>eGift FAQS</button>
					</section>
				</div>
			</main>
		</div>
	);
};

export default GiftCard;
