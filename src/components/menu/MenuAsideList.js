const MenuAsideList = ({ items }) => {
	const productLinks = items.map((item, idx) => {
		return (
			<div key={idx} className="aside">
				<h4>{item.title}</h4>
				<ul>
					{item.links.map((link, index) => (
						<li key={index}>{link}</li>
					))}
				</ul>
			</div>
		);
	});
	return [productLinks];
};

export default MenuAsideList;
