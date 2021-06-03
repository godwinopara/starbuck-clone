import { Link } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
const Menu = () => {
	return (
		<>
			<header>
				<div className="menu-header">
					<NavBar />
				</div>

				<div className="nav-sub-menu">
					<Link to="/menu">All Products</Link>
					<Link to="/menu/featured">Featured</Link>
					<Link>Previous Order</Link>
					<Link>Favourite Order</Link>
				</div>
			</header>
		</>
	);
};

export default Menu;
