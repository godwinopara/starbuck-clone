const FooterLink = ({ items, className }) => {
	const footerItem = items.map((item) => {
		return (
			<div>
				<h3>{item.title}</h3>
				<ul className="footer-drop-down">
					{item.links.map((link) => (
						<li>{link}</li>
					))}
				</ul>
			</div>
		);
	});
	return <div className={className}>{footerItem}</div>;
};

export default FooterLink;
