import React, { useState, useEffect } from "react";
import DesktopAccodion from "./DesktopAccodion";
import MobileAccodion from "./MobileAccodion";

const FooterAccodion = () => {
	const [viewportWidth, setviewportWidth] = useState(window.innerWidth);
	const breakPoint = 1040;

	console.log(viewportWidth);

	useEffect(() => {
		const handleWindowSize = () => setviewportWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowSize);
		return () => {
			window.removeEventListener("resize", handleWindowSize);
		};
	});

	return viewportWidth < breakPoint ? <MobileAccodion /> : <DesktopAccodion />;
};

export default FooterAccodion;
