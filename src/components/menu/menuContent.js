import HotCoffee from "./menu-images/hot-coffee.webp";
import HotTea from "./menu-images/hot-tea.webp";
import HotDrink from "./menu-images/hot-drinks.webp";
import Frappuccino from "./menu-images/frappuccino-breverage.webp";
import ColdCoffee from "./menu-images/cold-coffee.webp";
import IcedTea from "./menu-images/iced-tea.webp";
import ColdDrink from "./menu-images/cold-drink.webp";
import HotBreakfast from "./menu-images/hot-breakfast.webp";
import BakeryBread from "./menu-images/bakery-bread.webp";
import LunchBread from "./menu-images/lunch-bread.webp";
import Sweet from "./menu-images/sweet.webp";
import Oatmeal from "./menu-images/oatmeal.webp";
import WholeBean from "./menu-images/whole-bean.webp";
import StarBuckVia from "./menu-images/star-buck-via.jpg";
import ColdCup from "./menu-images/cold-cup.webp";
import Tumbler from "./menu-images/tumbler.webp";
import WaterBottle from "./menu-images/water-bottle.webp";
import StarBuckPack from "./menu-images/star-buck-pack.jpg";

const drinks = [
	{ productName: "Hot Coffees", imgUrl: HotCoffee },
	{ productName: "Hot Teas", imgUrl: HotTea },
	{ productName: "Hot Drinks", imgUrl: HotDrink },
	{ productName: "Frappuccino® Blended Beverages", imgUrl: Frappuccino },
	{ productName: "Cold Coffees", imgUrl: ColdCoffee },
	{ productName: "Iced Teas", imgUrl: IcedTea },
	{ productName: "Cold Drinks", imgUrl: ColdDrink },
];

const foods = [
	{ productName: "Hot Breakfast", imgUrl: HotBreakfast },
	{ productName: "Bakery", imgUrl: BakeryBread },
	{ productName: "Lunch", imgUrl: LunchBread },
	{ productName: "Snacks & Sweet", imgUrl: Sweet },
	{ productName: "OatMeal & Yogurt", imgUrl: Oatmeal },
];

const homeCoffee = [
	{ productName: "Whole Bean", imgUrl: WholeBean },
	{ productName: "VIA® Instant", imgUrl: StarBuckVia },
];

const merchandise = [
	{ productName: "Cold Cup", imgUrl: ColdCup },
	{ productName: "Tumbler", imgUrl: Tumbler },
	{ productName: "Water Bottles", imgUrl: WaterBottle },
	{ productName: "Other", imgUrl: StarBuckPack },
];

const aside = [
	{
		title: "Drinks",
		links: [
			"Hot Coffees",
			"Hot Teas",
			"Hot Drinks",
			"Frappuccino® Blended Beverages",
			"Cold Coffees",
			"Iced Teas",
			"Cold Drinks",
		],
	},
	{
		title: "Foods",
		links: ["Hot Breakfast", "Bakery", "Lunch", "Snacks & Sweet", "OatMeal & Yogurt"],
	},
	{
		title: "At Home Coffee",
		links: ["Whole Bean", "VIA® Instant"],
	},
	{
		title: "Merchandise",
		links: ["Cold Cup", "Tumbler", "Water Bottles", "Other"],
	},
];

const content = { drinks, foods, homeCoffee, merchandise, aside };

export default content;
