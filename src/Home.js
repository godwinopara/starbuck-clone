import products from "./components/products";
import Product from "./components/Product";
import Terms from "./components/Terms";
import informations from "./App-text/termsText";

const Home = () => {
	return (
		<>
			<header></header>
			<main>
				<div className="products-container">
					<Product products={products} />
				</div>
				<div className="items-container">
					<Terms information={informations} />
				</div>
			</main>
		</>
	);
};

export default Home;
