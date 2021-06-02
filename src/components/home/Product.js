const Product = ({ products }) => {
	const allProducts = products.map((product, index) => {
		return (
			<section key={product.id} className={`product${index + 1}`}>
				<div className="product-img">
					<img src={product.imgUrl} alt={product.imgDetails} />
				</div>

				<div id={product.className} className="product">
					<div className="product-details">
						<h2>{product.productHeader}</h2>
						<p className="container">{product.productDetails}</p>
						<button>{product.buttonName}</button>
					</div>
				</div>
			</section>
		);
	});
	return [allProducts];
};
export default Product;
