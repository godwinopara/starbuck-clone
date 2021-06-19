import React from "react";
import { Link } from "react-router-dom";

function Button({ path }) {
	return (
		<Link to={path}>
			<button>See all</button>
		</Link>
	);
}

export default Button;
