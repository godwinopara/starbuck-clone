import FooterText from "../FooterText";

const DesktopAccodion = () => {
	const desktopAccodion = FooterText.footerTexts.map((item, index) => {
		return (
			<div key={index}>
				<div className="title">
					<h3>{item.title}</h3>
				</div>

				<ul className="footer-drop-down">
					{item.links.map((link, index) => (
						<li className="drop-down" key={index}>
							<a href="/">{link}</a>
						</li>
					))}
				</ul>
			</div>
		);
	});
	return <>{desktopAccodion}</>;
};

export default DesktopAccodion;
