const footerTexts = [
	{
		id: "about",
		title: "About Us",
		className: "about",
		links: [
			"Our Heritage",
			"Our Coffee",
			"Stories and News",
			"Investor Relations",
			"Policies and Standard",
			"Customer Service",
		],
	},
	{
		id: "career",

		title: "Careers",
		className: "career",

		links: [
			"Culture and Values",
			"Inclusion, Diversity and Equity",
			"College Achievement Plan",
			"U.S Careers",
			"International Careers",
		],
	},
	{
		id: "social",

		title: "Social Impact",
		className: "social",

		links: [
			"Ethical Sourcing",
			"Leading in Sustainablity",
			"Strengthening Communities",
			"Creating Opportunities",
			"Global Social Impact Report",
		],
	},
	{
		id: "partners",

		title: "For Business Partners",
		className: "partners",

		links: [
			"Landlord Support Center",
			"Suppliers",
			"Corporate Gift Card Sales",
			"Office and Foodservice Coffee",
		],
	},
	{
		id: "pickup",

		title: "Order and Pickup",
		className: "pickup",

		links: [
			"Order on the App",
			"Order on the Web",
			"Delivery",
			"Order and Pickup Options",
			"Explore and Find Coffe for Home",
		],
	},
];
const privacyLink = [
	{ path: "privacy-policy", name: "Privacy Policy" },
	{ path: "terms-of-use", name: "Terms Of Use" },
	{ path: "supply-chain", name: "CA Supply Chain Act" },
	{ path: "idea", name: "Submit Your Idea" },
	{ path: "cookies", name: "Cookie Preferences" },
];

const footerItems = { footerTexts, privacyLink };

export default footerItems;
