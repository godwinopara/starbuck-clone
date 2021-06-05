const ListStar = ({ stars }) => {
	const starItem = stars.map((star, index) => {
		return (
			<div key={index}>
				<h3>{star}</h3>
				<span>★</span>
			</div>
		);
	});
	return [starItem];
};

export default ListStar;
