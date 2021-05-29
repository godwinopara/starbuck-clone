const NavItem = ({ items, className }) => {
	const links = items.map((item, index) => (
		<li key={index}>
			<a href={`/${item.toLowerCase()}`}>{item}</a>
		</li>
	));
	return <ul className={className}>{links}</ul>;
};

export default NavItem;
