const PaymentMethod = ({ paymentType }) => {
	return (
		<div className="payment-method">
			<img src={paymentType.image} alt="payment option" />
			<div className="payment-content">
				<h3>{paymentType.title}</h3>
				<p>{paymentType.details}</p>
			</div>
		</div>
	);
};

export default PaymentMethod;
