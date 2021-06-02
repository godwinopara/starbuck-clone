import { Link } from "react-router-dom";
const NavItem = ({ items, className }) => {
	const links = items.map((item, index) => (
		<li key={index}>
			<Link to={`/${item.path}`}>{item.name}</Link>
		</li>
	));
	return <ul className={className}>{links}</ul>;
};

export default NavItem;
