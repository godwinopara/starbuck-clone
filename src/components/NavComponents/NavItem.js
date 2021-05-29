const NavItem = ({ items }) => {
	const links = items.map((item, index) => (
		<li key={index}>
			<a href={`/${item.toLowerCase()}`}>{item}</a>
		</li>
	));
	return <ul>{links}</ul>;
};

export default NavItem;
