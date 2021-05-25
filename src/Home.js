import products from "./components/products";
import Product from "./components/Product";
import Terms from "./components/Terms";

const terms1 = "*At participating stores. Some restrictions apply. See starbucks.com/rewards.";

const terms2 =
	"**Restrictions & other fees apply. See Uber Eats app for terms & availability. Fees subject to change. Limited time offer. May not be combined with other offers, discounts or promotions. Menu limited. Restricted delivery area. Available at participating locations only. Prices for Starbucks® items purchased through Uber Eats may be higher than posted in stores or as marked. May not be combined with other offers, discounts or promotions.";
const terms3 =
	"***For every Starbucks eGift Card in our Military Appreciation Month category sold May 1-31, we’ll donate $5 to Blue Star Families and Operation Gratitude to support the mental health and well-being of our military community. Donations will be evenly divided between the two organizations. Learn more at bluestarfam.org and operationgratitude.com.";

const Home = () => {
	return (
		<>
			<header></header>
			<main>
				<div className="products-container">
					<Product products={products} />
				</div>
				<div className="items-container">
					<Terms information={terms1} />
					<Terms information={terms2} />
					<Terms information={terms3} />
				</div>
			</main>
		</>
	);
};

export default Home;
