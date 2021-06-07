const PaymentMethod = ({ paymentType }) => {
	return (
		<figure className="payment-method-types">
			<img src={paymentType.image} alt="payment option" />

			<figcaption className="payment-content">
				<h3>{paymentType.title}</h3>
				<p>{paymentType.details}</p>
			</figcaption>
		</figure>
	);
};

export default PaymentMethod;
