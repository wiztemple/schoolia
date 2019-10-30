const { admin, db } = require('../utils/admin');
const firebase = require('firebase');
const config = require('../utils/config');
const { validateSignupData } = require('../utils/validators');

firebase.initializeApp(config);

exports.signup = (request, response) => {
	const newUser = {
		email: request.body.email,
		password: request.body.password,
		confirmPassword: request.body.confirmPassword,
		handle: request.body.handle
	};

	const { valid, errors } = validateSignupData(newUser);

	if (!valid) {
		return response.status(400).json(errors);
	}

	// const noImg = 'user.png';

	let token, userId;
	db
		.doc(`/users/${newUser.handle}`)
		.get()
		.then((doc) => {
			if (doc.exists) {
				return response.status(400).json({ handle: 'this handle is already taken' });
			} else {
				return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
			}
		})
		.then((data) => {
			userId = data.user.uid;
			return data.user.getIdToken();
		})
		.then((idToken) => {
			token = idToken;
			const userCredentials = {
				handle: newUser.handle,
				email: newUser.email,
				createdAt: new Date().toISOString(),
				// imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
				userId
			};
			return db.doc(`/users/${newUser.handle}`).set(userCredentials);
		})
		.then(() => {
			return response.status(201).json({ token });
		})
		.catch((err) => {
			console.error(err);
			if (err.code === 'auth/email-already-in-use') {
				return response.status(400).json({ email: 'Email is already is use' });
			} else {
				return response.status(500).json({ general: 'Something went wrong, please try again' });
			}
		});
};
