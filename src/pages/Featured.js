import React from "react";
import NavBar from "../components/nav/NavBar";
import giftCardContent from "../components/giftcard/giftcardContent";
import { useParams } from "react-router-dom";

function Featured() {
	const { id } = useParams;
	return (
		<div className="featured-container ">
			<header>
				<div className="giftcard-nav">
					<NavBar />
				</div>
			</header>
			<main className="container">
				<h2>FEATURED</h2>
				<p>{id}</p>
				<figure>{giftCardContent.featuredGiftCard}</figure>
			</main>
		</div>
	);
}

export default Featured;
