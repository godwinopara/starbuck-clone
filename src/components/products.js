import starbuckStarImg from "../images/landing-page-images/starbuck-star.webp";
import threeFracuccino from "../images/landing-page-images/three-fracuccions.webp";
import oneFracuccinoImage from "../images/landing-page-images/fracuccino-drink.webp";
import starbuckPickupImg from "../images/landing-page-images/starbuck-pickup.webp";
import starbuckCoffeeShop from "../images/landing-page-images/starbuck-shop.webp";
import starbuckGiftCard from "../images/landing-page-images/gift-cards.webp";

const products = [
	{
		id: 1,
		className: "product1",
		productHeader: "FREE COFFEE IS A TAP AWAY",
		productDetails: "join now to start earning Rewards.*",
		buttonName: "Join now",
		imgUrl: starbuckStarImg,
		imgDetails: "starbuck reward point card logo",
	},
	{
		id: 2,
		className: "product2",
		productHeader: "SUMMER FOREVER",
		productDetails:
			"Go vibrant with a Dragon Drink, Star Drink or Pink Drink, all made with real fruit pieces and coconutmilk",
		buttonName: "Order coconutmilk drink",
		imgUrl: threeFracuccino,
		imgDetails: "three iced fracuccino drinks",
	},
	{
		id: 3,
		className: "product3",
		productHeader: "GOOD MOOD MADE",
		productDetails:
			"Sip your way to a summer of so much yes. Try our fun new Strawberry Funnel Cake Frappuccino® drink.",
		buttonName: "Order Frappuccino® drink",
		imgUrl: oneFracuccinoImage,
		imgDetails: "one fracuccino drink",
	},
	{
		id: 4,
		className: "product4",
		productHeader: "Order and pick up. Easy as that.",
		productDetails:
			"Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you.",
		buttonName: "See pickup options",
		imgUrl: starbuckPickupImg,
		imgDetails: "starbuck pick up advert",
	},
	{
		id: 5,
		className: "product5",
		productHeader: "Let us bring the picnic to you",
		productDetails:
			"Enjoy $0 Delivery Fee on Starbucks orders over $20 on UberEats through May 31.**",
		buttonName: "Order now",
		imgUrl: starbuckCoffeeShop,
		imgDetails: "starbuck coffee shop",
	},
	{
		id: 6,
		className: "product6",
		productHeader: "Military Appreciation Month",
		productDetails:
			"For each Military eGift Card sold in May, we’ll donate $5 to support the mental health and well-being of our military community.***",
		buttonName: "send an eGift",
		imgUrl: starbuckGiftCard,
		imgDetails: "starbuck giftcards",
	},
];

export default products;
