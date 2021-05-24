import NavBar from "./components/NavBar";

const Product = ({ productHeader, productDetails, imgUrl, imgDetails, className, buttonName }) => {
	return (
		<section>
			<div className={className}>
				<h2>{productHeader}</h2>
				<p>{productDetails}</p>
				<button>{buttonName}</button>
			</div>
			<img src={imgUrl} alt={imgDetails} />
		</section>
	);
};

const Home = () => {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<Product
					className={"product1"}
					productHeader={"FREE COFFEE IS A TAP AWAY"}
					productDetails={"join now to start earnign Rewards.*"}
					buttonName={"Join now"}
				/>
			</main>
		</>
	);
};

export default Home;
