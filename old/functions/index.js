const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./utils/FBAuth');

const { getAllSchools, createSchool, getSchool, deleteSchool, updateSchool } = require('./handlers/schools');
const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require('./handlers/users');
const { commentOnSchool } = require('./handlers/comments');
const { upvoteSchool, downvoteSchool } = require('./handlers/reactions');

// school routes
app.get('/schools', getAllSchools);
app.post('/school', FBAuth, createSchool);
app.get('/schools/:schoolId', getSchool);
app.delete('/schools/:schoolId', FBAuth, deleteSchool);
app.put('/schools/:schoolId', FBAuth, updateSchool);

// comment routes
app.post('/schools/:schoolId/comment', FBAuth, commentOnSchool);

// upvote route
app.get('/schools/:schoolId/upvote', FBAuth, upvoteSchool);
app.get('/schools/:schoolId/downvote', FBAuth, downvoteSchool);

// users  route
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
