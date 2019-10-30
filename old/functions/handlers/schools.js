const { db } = require('../utils/admin');

exports.getAllSchools = (request, response) => {
	let first = db.collection('schools').orderBy('established').limit(3);
	let paginate = first.get().then((snapshot) => {
		console.log(snapshot.docs.length);
		let last = snapshot.docs[snapshot.docs.length - 1];

		let next = db.collection('schools').orderBy('established').startAfter(last.data().established).limit(1);

		return next
			.get()
			.then((snapshot) => {
				console.log('Num results:', snapshot.docs.length);
				let schools = [];
				snapshot.forEach((doc) => {
					schools.push({
						schoolId: doc.id,
						name: doc.data().name,
						category: doc.data().category,
						type: doc.data().type,
						motto: doc.data().motto,
						location: doc.data().location,
						state: doc.data().state,
						geolocation: doc.data().geolocation,
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
	});

	return paginate;
	// 	db
	// 		.collection('schools')
	// 		.orderBy('createdAt', 'desc')
	// 		.get()
	// 		.then((data) => {
	// 			let schools = [];
	// 			data.forEach((doc) => {
	// 				schools.push({
	// 					schoolId: doc.id,
	// 					name: doc.data().name,
	// 					category: doc.data().category,
	// 					type: doc.data().type,
	// 					motto: doc.data().motto,
	// 					location: doc.data().location,
	// 					state: doc.data().state,
	// 					geolocation: doc.data().geolocation,
	// 					mission: doc.data().mission,
	// 					mandate: doc.data().mandate,
	// 					about: doc.data().about,
	// 					established: doc.data().established,
	// 					email: doc.data().email,
	// 					telephone: doc.data().telephone,
	// 					creator: doc.data().creator,
	// 					pmb: doc.data().pmb,
	// 					logo: doc.data().logo,
	// 					website: doc.data().website,
	// 					current_vc: doc.data().current_vc,
	// 					images: doc.data().images,
	// 					createdAt: doc.data().createdAt
	// 				});
	// 			});
	// 			return response.json(schools);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// };
};

exports.createSchool = (request, response) => {
	const newSchool = {
		name: request.body.name,
		category: request.body.category,
		type: request.body.type,
		motto: request.body.motto,
		mission: request.body.mission,
		mandate: request.body.mandate,
		location: request.body.location,
		state: request.body.state,
		geolocation: request.body.geolocation,
		about: request.body.about,
		established: request.body.established,
		email: request.body.email,
		userHandle: request.user.handle,
		telephone: request.body.telephone,
		creator: request.body.creator,
		pmb: request.body.pmb,
		logo: request.body.logo,
		website: request.body.website,
		current_vc: request.body.current_vc,
		images: request.body.images,
		userImage: request.user.imageUrl,
		upvoteCount: 0,
		commentCount: 0,
		viewCount: 0,
		createdAt: new Date().toISOString()
	};
	db
		.collection('schools')
		.add(newSchool)
		.then((doc) => {
			const resSchool = newSchool;
			resSchool.schoolId = doc.id;
			response.json(resSchool);
		})
		.catch((err) => {
			response.status(500).json({ error: 'something went wrong' });
			console.error(err);
		});
};

// Fetch one school
exports.getSchool = (request, response) => {
	let schoolData = {};
	db
		.doc(`/schools/${request.params.schoolId}`)
		.get()
		.then((doc) => {
			if (!doc.exists) {
				return response.status(404).json({ error: 'School not found' });
			}
			schoolData = doc.data();
			schoolData.schoolId = doc.id;

			let comments = db
				.collection('comments')
				.orderBy('createdAt', 'desc')
				.where('schoolId', '==', request.params.schoolId)
				.get();
			let faculties = db.collection('faculties').where('schoolId', '==', request.params.schoolId).get();
			return Promise.all([ comments, faculties ]);
		})
		.then((data) => {
			console.log(data);
			schoolData.comments = [];
			schoolData.faculties = [];
			data[0].forEach((doc) => {
				schoolData.comments.push(doc.data());
			});
			data[1].forEach((doc) => {
				schoolData.faculties.push(doc.data());
			});
			return response.json(schoolData);
		})
		.catch((err) => {
			console.error(err);
			response.status(500).json({ error: err.code });
		});
};

// Delete a school
exports.deleteSchool = (request, response) => {
	const document = db.doc(`/schools/${request.params.schoolId}`);
	document
		.get()
		.then((doc) => {
			if (!doc.exists) {
				return response.status(404).json({ error: 'School not found' });
			}
			if (doc.data().userHandle !== request.user.handle) {
				return response.status(403).json({ error: 'Unauthorized' });
			} else {
				return document.delete();
			}
		})
		.then(() => {
			response.json({ message: 'School deleted successfully' });
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};

// Update a school
exports.updateSchool = (request, response) => {
	const document = db.doc(`/schools/${request.params.schoolId}`);
	const updatableFields = {
		name: request.body.name,
		category: request.body.category,
		type: request.body.type,
		motto: request.body.motto,
		mission: request.body.mission,
		mandate: request.body.mandate,
		location: request.body.location,
		state: request.body.state,
		geolocation: request.body.geolocation,
		about: request.body.about,
		established: request.body.established,
		email: request.body.email,
		telephone: request.body.telephone,
		pmb: request.body.pmb,
		logo: request.body.logo,
		website: request.body.website,
		current_vc: request.body.current_vc,
		images: request.body.images,
		updatedAt: new Date().toISOString()
	};
	document
		.get()
		.then((doc) => {
			if (!doc.exists) {
				return response.status(404).json({ error: 'School not found' });
			}
			if (doc.data().userHandle !== request.user.handle) {
				return response.status(403).json({ error: 'Unauthorized' });
			} else {
				return document.update(updatableFields);
			}
		})
		.then(() => {
			response.status(200).json({ message: 'School updated successfully' });
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};

// school queries
exports.querySchool = (request, response) => {
	let categoryParam;
	let typeParam;

	db
		.collection('schools')
		.where('category', '===', `${categoryParam}`)
		.where('type', '==', `${typeParam}`)
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
					location: doc.data().location,
					state: doc.data().state,
					geolocation: doc.data().geolocation,
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
		});
};
