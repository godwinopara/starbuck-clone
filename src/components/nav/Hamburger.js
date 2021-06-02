const Hamburger = ({ handleClick }) => {
	return (
		<div onClick={handleClick} className="hamburger-menu">
			<div className="hamburger"></div>
			<div className="hamburger"></div>
			<div className="hamburger"></div>
		</div>
	);
};

export default Hamburger;
