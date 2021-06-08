const ListStar = ({ stars }) => {
	const starItem = stars.map((star, index) => {
		return (
			<div className="stars" id={star} key={index} onClick={handleClick}>
				<h3>{star}</h3>
				<span>★</span>
			</div>
		);
	});
	function handleClick() {
		console.log(stars);
	}
	return [starItem];
};

export default ListStar;
