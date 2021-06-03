import { Link } from "react-router-dom";
const MenuAsideList = ({ items }) => {
	const productLinks = items.map((item) => {
		return (
			<>
				<h4>{item.title}</h4>
				<ul>
					{item.links.map((link) => (
						<li>
							<Link to={`/${item.path}`}></Link>
						</li>
					))}
				</ul>
			</>
		);
	});
	return { productLinks };
};

export default MenuAsideList;
