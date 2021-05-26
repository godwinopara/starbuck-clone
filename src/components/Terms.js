const Terms = ({ information }) => {
	const displayTerms = information.map((info) => {
		return (
			<div className="item container">
				<p>{info}</p>
			</div>
		);
	});
	return [displayTerms];
};

export default Terms;
