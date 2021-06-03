import { Link } from "react-router-dom";
const NavItem = ({ items }) => {
	const links = items.map((item, index) => (
		<li key={index}>
			<Link className={item.path} to={`/${item.path}`}>
				{item.name}
			</Link>
		</li>
	));
	return <ul>{links}</ul>;
};

export default NavItem;
