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
					<Product products={products} />
				</div>
				<div className="items-container">
					<Terms information={informations} />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Home;
