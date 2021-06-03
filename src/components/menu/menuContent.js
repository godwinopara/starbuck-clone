import { HotCoffee } from "./menu-images/hot-coffee.webp";
import { HotTea } from "./menu-images/hot-tea.webp";
import { HotDrink } from "./menu-images/hot-drinks.webp";
import { Frappuccino } from "./menu-images/frappuccino-breverage.webp";
import { ColdCoffee } from "./menu-images/cold-coffee.webp";
import { IcedTea } from "./menu-images/iced-tea.webp";
import { ColdDrink } from "./menu-images/cold-drink.webp";
import { HotBreakfast } from "./menu-images/hot-breakfast.webp";
import { BakeryBread } from "./menu-images/bakery-bread.webp";
import { LunchBread } from "./menu-images/lunch-bread.webp";
import { Sweet } from "./menu-images/sweet.webp";
import { Oatmeal } from "./menu-images/oatmeal.webp";
import { WholeBean } from "./menu-images/whole-bean.webp";
import { StarBuckVia } from "./menu-images/star-buck-via.webp";
import { ColdCup } from "./menu-images/cold-cup.webp";
import { Tumbler } from "./menu-images/Tubmbler.webp";
import { WaterBottle } from "./menu-images/water-bottle.webp";
import { StarBuckPack } from "./menu-images/star-buck-pack.webp";

const drinks = [
	{ productName: "Hot Coffees", img: HotCoffee },
	{ productName: "Hot Teas", img: HotTea },
	{ productName: "Hot Drinks", img: HotDrink },
	{ productName: "Frappuccino® Blended Beverages", img: Frappuccino },
	{ productName: "Cold Coffees", img: ColdCoffee },
	{ productName: "Iced Teas", img: IcedTea },
	{ productName: "Cold Drinks", img: ColdDrink },
];

const foods = [
	{ productName: "Hot Breakfast", img: HotBreakfast },
	{ productName: "Bakery", img: BakeryBread },
	{ productName: "Lunch", img: LunchBread },
	{ productName: "Snacks & Sweet", img: Sweet },
	{ productName: "OatMeal & Yogurt", img: Oatmeal },
];

const homeCoffee = [
	{ productName: "Whole Bean", img: WholeBean },
	{ productName: "VIA® Instant", img: StarBuckVia },
];

const merchandise = [
	{ productName: "Cold Cup", img: ColdCup },
	{ productName: "Tumbler", img: Tumbler },
	{ productName: "Water Bottles", img: WaterBottle },
	{ productName: "Other", img: StarBuckPack },
];

const content = { drinks, foods, homeCoffee, merchandise };

export default content;
