const { admin, db } = require('../utils/admin');

exports.getAllSchools = (request, response) => {
	db
		.collection('schools')
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let schools = [];
			data.forEach((doc) => {
				schools.push({
					schoolId: doc.id,
					name: doc.data().name,
					category: doc.data().category,
					type: doc.data().type,
					motto: doc.data().motto,
					mission: doc.data().mission,
					mandate: doc.data().mandate,
					about: doc.data().about,
					established: doc.data().established,
					email: doc.data().email,
					telephone: doc.data().telephone,
					creator: doc.data().creator,
					pmb: doc.data().pmb,
					logo: doc.data().logo,
					website: doc.data().website,
					current_vc: doc.data().current_vc,
					images: doc.data().images,
					createdAt: doc.data().createdAt
				});
			});
			return response.json(schools);
		})
		.catch((err) => {
			console.error(err);
		});
};

exports.createSchool = (request, response) => {
	if (request.method !== 'POST') {
		return response.status(400).json({
			error: 'method not allowed'
		});
	}
	const newSchool = {
		name: request.body.name,
		category: request.body.category,
		type: request.body.type,
		motto: request.body.motto,
		mission: request.body.mission,
		mandate: request.body.mandate,
		about: request.body.about,
		established: request.body.established,
		email: request.body.email,
		telephone: request.body.telephone,
		creator: request.body.creator,
		pmb: request.body.pmb,
		logo: request.body.logo,
		website: request.body.website,
		current_vc: request.body.current_vc,
		images: request.body.images,
		createdAt: new Date().toISOString()
	};
	db
		.collection('schools')
		.add(newSchool)
		.then((doc) => {
			response.json({ message: `document ${doc.id} created successfully` });
		})
		.catch((err) => {
			response.status(500).json({ error: 'something went wrong' });
			console.error(err);
		});
};
