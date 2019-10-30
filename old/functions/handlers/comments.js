const { db } = require('../utils/admin');

// Comment on a school
exports.commentOnSchool = (request, response) => {
	if (request.body.body.trim() === '') return response.status(400).json({ comment: 'Must not be empty' });

	const newComment = {
		body: request.body.body,
		createdAt: new Date().toISOString(),
		schoolId: request.params.schoolId,
		userHandle: request.user.handle,
		userImage: request.user.imageUrl
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
		.then(() => db.collection('comments').add(newComment))
		.then(() => response.json(newComment))
		.catch((err) => {
			console.log(err);
			response.status(500).json({ error: 'Something went wrong' });
		});
};
