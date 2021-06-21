import { Link } from "react-router-dom";
import NavBar from "../components/nav/NavBar";
import menuContent from "../components/menu/menuContent";
import MenuList from "../components/menu/MenuList";
import MenuAsideList from "../components/menu/MenuAsideList";
import Footer from "../components/footer/Footer";
const Menu = () => {
	return (
		<>
			<div className="menu-wrapper">
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
							<Link className="menu-link" to="/menu/previous">
								Previous Order
							</Link>
							<Link className="menu-link" to="/menu/favorite">
								Favourite Products
							</Link>
						</div>
					</div>
				</header>
				<main>
					<div className="menu-main-container menu-container">
						<aside>
							<div className="aside-container">
								<MenuAsideList items={menuContent.aside} />
							</div>
						</aside>
						<div className="menu-content-container">
							<div className="menu-heading">
								<h1>Menu</h1>
							</div>
							<section className="drinks">
								<div className="product-title">
									<h3>Drinks</h3>
								</div>
								<div className="products">
									<MenuList items={menuContent.drinks} />
								</div>
							</section>
							<section className="food">
								<div className="product-title">
									<h3>Foods</h3>
								</div>
								<div className="products">
									<MenuList items={menuContent.foods} />
								</div>
							</section>
							<section className="home-coffee">
								<div className="product-title">
									<h3>At Home Coffee</h3>
								</div>
								<div className="products">
									<MenuList items={menuContent.homeCoffee} />
								</div>
							</section>
							<section className="merchandise">
								<div className="product-title">
									<h3>Merchandise</h3>
								</div>
								<div className="products">
									<MenuList items={menuContent.merchandise} />
								</div>
							</section>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default Menu;
