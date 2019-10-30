const { db } = require('../utils/admin');

// upvote a school
exports.upvoteSchool = (request, response) => {
	const upvoteDocument = db
		.collection('upvotes')
		.where('userHandle', '==', request.user.handle)
		.where('schoolId', '==', request.params.schoolId)
		.limit(1);

	const schoolDocument = db.doc(`/schools/${request.params.schoolId}`);

	let schoolData;

	schoolDocument
		.get()
		.then((doc) => {
			if (doc.exists) {
				schoolData = doc.data();
				schoolData.schoolId = doc.id;
				return upvoteDocument.get();
			} else {
				return response.status(404).json({ error: 'School not found' });
			}
		})
		.then((data) => {
			if (data.empty) {
				return db
					.collection('upvotes')
					.add({
						schoolId: request.params.schoolId,
						userHandle: request.user.handle
					})
					.then(() => {
						schoolData.upvoteCount++;
						return schoolDocument.update({ upvoteCount: schoolData.upvoteCount });
					})
					.then(() => {
						return response.json(schoolData);
					});
			} else {
				return response.status(400).json({ error: 'School already upvoted' });
			}
		})
		.catch((err) => {
			console.error(err);
			response.status(500).json({ error: err.code });
		});
};

exports.downvoteSchool = (request, response) => {
	const upvoteDocument = db
		.collection('upvotes')
		.where('userHandle', '==', request.user.handle)
		.where('schoolId', '==', request.params.schoolId)
		.limit(1);

	const schoolDocument = db.doc(`/schools/${request.params.schoolId}`);

	let schoolData;

	schoolDocument
		.get()
		.then((doc) => {
			if (doc.exists) {
				schoolData = doc.data();
				schoolData.schoolId = doc.id;
				return upvoteDocument.get();
			} else {
				return response.status(404).json({ error: 'School not found' });
			}
		})
		.then((data) => {
			if (data.empty) {
				return response.status(400).json({ error: 'School not liked' });
			} else {
				return db
					.doc(`/upvotes/${data.docs[0].id}`)
					.delete()
					.then(() => {
						schoolData.upvoteCount--;
						return schoolDocument.update({ upvoteCount: schoolData.upvoteCount });
					})
					.then(() => {
						response.json(schoolData);
					});
			}
		})
		.catch((err) => {
			console.error(err);
			response.status(500).json({ error: err.code });
		});
};
