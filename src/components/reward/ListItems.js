const ListPackages = ({ itemToList }) => {
	const allItems = itemToList.map((item, index) => {
		return (
			<div key={index} className="package-wrapper">
				<img src="" alt="" />
				<div className="package-content">
					<h3>{item.title}</h3>
					<p>{item.details}</p>
					<button>Learn More</button>
				</div>
			</div>
		);
	});
	return [allItems];
};

export default ListPackages;
