import FreeFunBees from "../../images/free-fun-bees.webp";
import GetToFreeFaster from "../../images/get-to-free-faster.webp";
import OrderAndPay from "../../images/order-and-pay-ahead.webp";
import paymentMethod1 from "../../images/1A.png";
import paymentMethod2 from "../../images/1B.png";
import paymentMethod3 from "../../images/2A.png";
import paymentMethod4 from "../../images/2B.png";
import paymentMethod5 from "../../images/3A.png";

const freePackages = [
	{
		title: "Fun Freebies",
		details:
			"Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.",
		image: FreeFunBees,
	},
	{
		title: "Order & pay ahead",
		details:
			"Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.",
		image: OrderAndPay,
	},
	{
		title: "Get to free faster",
		details:
			"Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.",
		image: GetToFreeFaster,
	},
];

const scanAndPay = {
	title: "Scan and pay separately",
	details: "Use cash or credit/debit card at the register",
	image: paymentMethod1,
};

const savePayment = {
	title: "Save Payment in the App",
	details:
		"Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.",
	image: paymentMethod2,
};

const preLoad = {
	title: "Preload",
	details:
		"To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.",
	image: paymentMethod3,
};

const registerCard = {
	title: "Register your gift card",
	details:
		"Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.",
	image: paymentMethod4,
};
const earnStars = {
	title: "Earn Stars even faster",
	details:
		"Earn Stars on all purchases you make with our credit card opens in new window in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.",
	image: paymentMethod5,
};

const content = { freePackages, scanAndPay, savePayment, preLoad, registerCard, earnStars };

export default content;
