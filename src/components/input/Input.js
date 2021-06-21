import React from "react";

function Input({ type, name, placeholder }) {
	return (
		<div className="input-component">
			<input type={type} name={name} id={name} placeholder={placeholder} />
		</div>
	);
}

export default Input;
