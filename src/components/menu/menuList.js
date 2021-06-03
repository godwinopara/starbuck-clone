const MenuList = (item) => {
	return (
		<div>
			<img src={item.img} alt={item.productName} />
			<p>{item.productName}</p>
		</div>
	);
};

export default MenuList;
