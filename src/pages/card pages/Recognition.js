import NavBar from "../components/nav/NavBar";
import giftCardContent from "../components/giftcard/giftcardContent";

function Featured() {
	return (
		<div className="featured-container ">
			<header>
				<div className="giftcard-nav">
					<NavBar />
				</div>
			</header>
			<main className="container">
				<h2>FEATURED</h2>
				<figure>{giftCardContent.featuredGiftCard}</figure>
			</main>
		</div>
	);
}

export default Featured;
