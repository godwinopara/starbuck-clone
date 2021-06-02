import FooterText from "../FooterText";
import FooterItem from "../FooterItem";

const MobileAccodion = () => {
	return (
		<div>
			{FooterText.footerTexts.map((item, index) => (
				<FooterItem item={item} key={index} />
			))}
		</div>
	);
};

export default MobileAccodion;
