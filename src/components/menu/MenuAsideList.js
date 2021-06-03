import { Link } from "react-router-dom";
const MenuAsideList = ({ items }) => {
	const productLinks = items.map((item) => {
		return (
			<div className="aside">
				<h4>{item.title}</h4>
				<ul>
					{item.links.map((link) => (
						<li>
							<Link to={`/${item.path}`}>{link}</Link>
						</li>
					))}
				</ul>
			</div>
		);
	});
	return [productLinks];
};

export default MenuAsideList;
