import React, { Fragment } from "react";

function CardList({ cards }) {
	const allCard = cards.map((card, idx) => {
		return <Fragment key={idx}>{card}</Fragment>;
	});
	return <figure className="card-list-item">{allCard}</figure>;
}

export default CardList;
