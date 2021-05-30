import React from "react";
import products from "./components/products";
import Product from "./components/Product";
import Terms from "./components/Terms";
import informations from "./App-text/termsText";
import NavBar from "./components/NavComponents/NavBar";
import Footer from "./components/Footer";

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
