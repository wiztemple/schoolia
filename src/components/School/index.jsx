import React from 'react';

// components
// import RectCard from '../RectCard';

const School = ({ schoolType, button, card }) => {
	return (
		<section>
			<div className="container">
				<div className="space-between align-center">
					<h1 className="h4 py-30">{schoolType}</h1>
					<div>
						{/* <button class="button button-blue">View More</button> */}
						{button}
					</div>
				</div>
				<div className="columns">{card}</div>
			</div>
		</section>
	);
};

export default School;
