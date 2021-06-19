import NavBar from "../components/nav/NavBar";
import giftCardContent from "../components/giftcard/giftcardContent";
import { useParams } from "react-router-dom";

function DisplayCard() {
	const { giftcard } = useParams();

	if (giftcard === "thankYouGiftCard") {
		return (
			<>
				<div className="featured-container">
					<header>
						<div className="giftcard-nav">
							<NavBar />
						</div>
					</header>
					<main className="container">
						<h2>THANK YOU</h2>
						<figure>{giftCardContent.thankYouGiftCard}</figure>
					</main>
				</div>
			</>
		);
	}

	if (giftcard === "featuredGiftCard") {
		return (
			<>
				<div className="featured-container">
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
			</>
		);
	}
	if (giftcard === "birthdayGiftCard") {
		return (
			<>
				<div className="featured-container">
					<header>
						<div className="giftcard-nav">
							<NavBar />
						</div>
					</header>
					<main className="container">
						<h2>BIRTHDAY</h2>
						<figure>{giftCardContent.birthdayGiftCard}</figure>
					</main>
				</div>
			</>
		);
	}
	if (giftcard === "graduationGiftCard") {
		return (
			<>
				<div className="featured-container">
					<header>
						<div className="giftcard-nav">
							<NavBar />
						</div>
					</header>
					<main className="container">
						<h2>GRADUATION</h2>
						<figure>{giftCardContent.graduationGiftCard}</figure>
					</main>
				</div>
			</>
		);
	}
	if (giftcard === "prideGiftCard") {
		return (
			<>
				<div className="featured-container">
					<header>
						<div className="giftcard-nav">
							<NavBar />
						</div>
					</header>
					<main className="container">
						<h2>PRIDE</h2>
						<figure>{giftCardContent.prideGiftCard}</figure>
					</main>
				</div>
			</>
		);
	}
	if (giftcard === "appriciationGiftCard") {
		return (
			<>
				<div className="featured-container">
					<header>
						<div className="giftcard-nav">
							<NavBar />
						</div>
					</header>
					<main className="container">
						<h2>APPRICIATION</h2>
						<figure>{giftCardContent.appriciationGiftCard}</figure>
					</main>
				</div>
			</>
		);
	}
	if (giftcard === "loveGiftCard") {
		return (
			<>
				<div className="featured-container">
					<header>
						<div className="giftcard-nav">
							<NavBar />
						</div>
					</header>
					<main className="container">
						<h2>LOVE</h2>
						<figure>{giftCardContent.loveGiftCard}</figure>
					</main>
				</div>
			</>
		);
	}
	if (giftcard === "recognitionGiftCard") {
		return (
			<>
				<div className="featured-container">
					<header>
						<div className="giftcard-nav">
							<NavBar />
						</div>
					</header>
					<main className="container">
						<h2>RECOGNITION</h2>
						<figure>{giftCardContent.recognitonGiftCard}</figure>
					</main>
				</div>
			</>
		);
	}
	if (giftcard === "encouragementGiftCard") {
		return (
			<>
				<div className="featured-container">
					<header>
						<div className="giftcard-nav">
							<NavBar />
						</div>
					</header>
					<main className="container">
						<h2>ENCOURAGMENT</h2>
						<figure>{giftCardContent.encouragementGiftCard}</figure>
					</main>
				</div>
			</>
		);
	}
	if (giftcard === "workplaceGiftCard") {
		return (
			<>
				<div className="featured-container">
					<header>
						<div className="giftcard-nav">
							<NavBar />
						</div>
					</header>
					<main className="container">
						<h2>WORKPLACE</h2>
						<figure>{giftCardContent.workplaceGiftCard}</figure>
					</main>
				</div>
			</>
		);
	}
	if (giftcard === "communityGiftCard") {
		return (
			<>
				<div className="featured-container">
					<header>
						<div className="giftcard-nav">
							<NavBar />
						</div>
					</header>
					<main className="container">
						<h2>COMMUNITY</h2>
						<figure>{giftCardContent.communityGiftCard}</figure>
					</main>
				</div>
			</>
		);
	}
}

export default DisplayCard;
