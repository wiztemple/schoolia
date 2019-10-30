import React from 'react';

// Components //#endregion
import Search from '../../components/Search';
import Popular from '../../components/Popular';
import School from '../../components/School';
// import University from '../../components/University';

import RectCard from '../../components/RectCard';
import WaveCard from '../../components/WaveCard';

const Home = () => {
	return (
		<div>
			<Search />
			<Popular />
			<School
				schoolType="Universities"
				button={<button className="button button-blue">View More</button>}
				card={
					<div className="columns">
						<RectCard />
						<RectCard />
						<RectCard />
					</div>
				}
			/>
			<School
				schoolType="Polytechnics"
				button={<button className="button button-blue">View More</button>}
				card={
					<div className="columns">
						<WaveCard />
						<WaveCard />
						<WaveCard />
						<WaveCard />
					</div>
				}
			/>
			<School
				schoolType="Colleges of Education"
				button={<button className="button button-blue">View More</button>}
				card={
					<div className="columns">
						<RectCard />
						<RectCard />
						<RectCard />
						<RectCard />
					</div>
				}
			/>
			<School
				schoolType="Monotechnics"
				button={<button className="button button-blue">View More</button>}
				card={
					<div className="columns">
						<RectCard />
						<RectCard />
						<RectCard />
						<RectCard />
					</div>
				}
			/>
			<School
				schoolType="Others"
				button={<button className="button button-blue">View More</button>}
				card={
					<div className="columns">
						<RectCard />
						<RectCard />
					</div>
				}
			/>
		</div>
	);
};

export default Home;
