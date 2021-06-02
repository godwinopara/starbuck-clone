import { BsChevronDown } from "react-icons/bs";
import React, { useState, useRef } from "react";

const FooterItem = ({ item }) => {
	const [show, setShow] = useState(false);

	const toggleAccodion = () => {
		setShow(!show);
	};
	return (
		<div className="accodian" onClick={toggleAccodion}>
			<div className="title">
				<h3>{item.title}</h3>
				<BsChevronDown className={`icon ${show ? "rotate" : ""}`} />
			</div>

			<ul className={show ? "open-accodion" : "close-accodion"}>
				{item.links.map((link, index) => (
					<li className="drop-down" key={index}>
						<a href="/">{link}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterItem;
