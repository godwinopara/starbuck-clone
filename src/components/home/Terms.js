const Terms = ({ information }) => {
	const displayTerms = information.map((info, index) => {
		return (
			<div key={index} className="item container">
				<p>{info}</p>
			</div>
		);
	});
	return [displayTerms];
};

export default Terms;
