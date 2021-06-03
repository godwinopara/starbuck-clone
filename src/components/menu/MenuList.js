const MenuList = ({ items }) => {
	const products = items.map((item) => {
		return (
			<figure>
				<img src={item.imgUrl} alt={item.productName} />
				<figcaption>{item.productName}</figcaption>
			</figure>
		);
	});
	return [products];
};

export default MenuList;
