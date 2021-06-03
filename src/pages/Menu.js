import { Link } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
const Menu = () => {
	return (
		<>
			<header>
				<div className="menu-header">
					<NavBar />
				</div>

				<div className="menu-nav-sub-menu">
					<div className="menu-container">
						<Link className="menu-link active" to="/menu">
							All Products
						</Link>
						<Link className="menu-link" to="/menu/featured">
							Featured
						</Link>
						<Link className="menu-link">Previous Order</Link>
						<Link className="menu-link">Favourite Products</Link>
					</div>
				</div>
			</header>
			<main>
				<section className="drinks"></section>
				<section className="food"></section>
				<section className="home-coffee"></section>
				<section className="merchandise"></section>
			</main>
		</>
	);
};

export default Menu;
