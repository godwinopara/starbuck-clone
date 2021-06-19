import NavBar from "../components/nav/NavBar";
import giftCardContent from "../components/giftcard/giftcardContent";

function DisplayCard({ giftcard, pageName }) {
	return (
		<div className="featured-container ">
			<header>
				<div className="giftcard-nav">
					<NavBar />
				</div>
			</header>
			<main className="container">
				<h2>{pageName}</h2>
				<figure>{giftCardContent.giftcard}</figure>
			</main>
		</div>
	);
}

export default DisplayCard;
