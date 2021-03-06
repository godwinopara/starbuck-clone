import React from "react";
import products from "../components/home/products";
import Product from "../components/home/Product";
import Terms from "../components/home/Terms";
import informations from "../components/home/termsText";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";

const Home = () => {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<div className="products-container">
					<div className="drinks">
						<Product products={products.drinks} />
					</div>
					<div className="delivery">
						<Product products={products.delivery} />
					</div>
					<div className="giftcard">
						<Product products={products.giftcards} />
					</div>
				</div>

				<div className="terms-container">
					<Terms information={informations} />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Home;
