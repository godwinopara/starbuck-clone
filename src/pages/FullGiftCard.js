import NavBar from "../components/nav/NavBar";
import giftCardContent from "../components/giftcard/giftcardContent";
import { useParams } from "react-router-dom";
import CardList from "../components/giftcard/CardList";

const FullGiftCard = ({ allGiftCards, giftcardName }) => {
	return (
		<>
			<div className="featured-container">
				<header>
					<div className="giftcard-nav">
						<NavBar />
					</div>
				</header>
				<main className="container">
					<h2>{giftcardName}</h2>
					<CardList cards={allGiftCards} />
				</main>
			</div>
		</>
	);
};

function DisplayCard() {
	const { giftcard } = useParams();

	if (giftcard === "thankYouGiftCard") {
		return (
			<FullGiftCard
				allGiftCards={giftCardContent.thankYouGiftCard}
				giftcardName="THANK YOU"
			/>
		);
	}

	if (giftcard === "featuredGiftCard") {
		return (
			<FullGiftCard allGiftCards={giftCardContent.featuredGiftCard} giftcardName="FEATURED" />
		);
	}
	if (giftcard === "birthdayGiftCard") {
		return (
			<FullGiftCard allGiftCards={giftCardContent.birthdayGiftCard} giftcardName="BIRTHDAY" />
		);
	}
	if (giftcard === "graduationGiftCard") {
		return (
			<FullGiftCard
				allGiftCards={giftCardContent.graduationGiftCard}
				giftcardName="GRADUATION"
			/>
		);
	}
	if (giftcard === "prideGiftCard") {
		return <FullGiftCard allGiftCards={giftCardContent.prideGiftCard} giftcardName="PRIDE" />;
	}
	if (giftcard === "appreciationGiftCard") {
		return (
			<FullGiftCard
				allGiftCards={giftCardContent.appreciationGiftCard}
				giftcardName="APPRECIATION"
			/>
		);
	}
	if (giftcard === "loveGiftCard") {
		return <FullGiftCard allGiftCards={giftCardContent.loveGiftCard} giftcardName="LOVE" />;
	}
	if (giftcard === "recognitionGiftCard") {
		return (
			<FullGiftCard
				allGiftCards={giftCardContent.recognitonGiftCard}
				giftcardName="RECOGNITION"
			/>
		);
	}
	if (giftcard === "encouragementGiftCard") {
		return (
			<FullGiftCard
				allGiftCards={giftCardContent.encouragementGiftCard}
				giftcardName="ENCOURAGMENT"
			/>
		);
	}
	if (giftcard === "workplaceGiftCard") {
		return (
			<FullGiftCard
				allGiftCards={giftCardContent.workplaceGiftCard}
				giftcardName="WORKPLACE"
			/>
		);
	}
	if (giftcard === "communityGiftCard") {
		return (
			<FullGiftCard
				allGiftCards={giftCardContent.communityGiftCard}
				giftcardName="COMMUNITY"
			/>
		);
	}
}

export default DisplayCard;
