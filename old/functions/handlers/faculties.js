const { db } = require('../utils/admin');

// Comment on a school
exports.addFulty = (request, response) => {
	if (request.body.name.trim() === '') return response.status(400).json({ comment: 'Must not be empty' });

	const newFaculty = {
		name: request.body.name,
		createdAt: new Date().toISOString(),
		schoolId: request.params.schoolId,
		userHandle: request.user.handle
	};

	db
		.doc(`/schools/${request.params.schoolId}`)
		.get()
		.then((doc) => {
			if (!doc.exists) {
				return response.status(404).json({ error: 'School not found' });
			}
			return doc.ref.update({ commentCount: doc.data().commentCount + 1 });
		})
		.then(() => db.collection('faculties').add(newFaculty))
		.then(() => response.json(newFaculty))
		.catch((err) => {
			console.log(err);
			response.status(500).json({ error: 'Something went wrong' });
		});
};

// get all faculties in a school //#endregion
exports.getFaculties = (request, response) => {
	let x;
};
