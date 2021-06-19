import Button from "./Button";
import AliceCarousel from "react-alice-carousel";

const DisplayGiftCard = ({ heading, path, giftcard, className }) => {
	const responsive = {
		0: { items: 3.2 },
		568: { items: 3.5 },
		1024: { items: 4.5 },
	};
	return (
		<section className={`container ${className}`}>
			<div className="heading">
				<h3>{heading}</h3>
				<Button path={path} />
			</div>
			<div className="giftcards">
				<AliceCarousel
					items={giftcard}
					responsive={responsive}
					controlsStrategy="alternate"
					mouseTracking
				/>
			</div>
		</section>
	);
};

export default DisplayGiftCard;
