const functions = require('firebase-functions');

const app = require('express')();
const firebase = require('firebase');

const { db } = require('./utils/admin');

const { getAllSchools, createSchool } = require('./handlers/schools');

var firebaseConfig = {
	apiKey: 'AIzaSyCSGlFR4cR1h2A_z-HyI1w-835CR0ewO-U',
	authDomain: 'schoolia-b4b71.firebaseapp.com',
	databaseURL: 'https://schoolia-b4b71.firebaseio.com',
	projectId: 'schoolia-b4b71',
	storageBucket: 'schoolia-b4b71.appspot.com',
	messagingSenderId: '121568832172',
	appId: '1:121568832172:web:6dfcb464c211e0c0190d09'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// scream routes
app.get('/schools', getAllSchools);
app.post('/school', createSchool);
// app.delete('/screams/:screamId', FBAuth, deleteScream);
// app.post('/scream', FBAuth, createScream);
// app.get('/scream/:screamId', getScream);
// app.post('/scream/:screamId/comment', FBAuth, commentOnScream);
// app.get('/scream/:screamId/like', FBAuth, likeScream);
// app.get('/scream/:screamId/unlike', FBAuth, unlikeScream);
// app.get('/user/:handle', getUserDetails);
// app.post('/notifications', FBAuth, markNotificationsRead);

exports.api = functions.https.onRequest(app);
