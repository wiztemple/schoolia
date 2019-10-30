import * as React from 'react';
import * as ReactDOM from 'react-dom';

// third party packages
import { Provider } from 'react-redux';

// components
import App from './App';

// helper functions
import store from './store';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
	apiKey: 'AIzaSyCSGlFR4cR1h2A_z-HyI1w-835CR0ewO-U',
	authDomain: 'schoolia-b4b71.firebaseapp.com',
	databaseURL: 'https://schoolia-b4b71.firebaseio.com',
	projectId: 'schoolia-b4b71',
	storageBucket: 'schoolia-b4b71.appspot.com',
	messagingSenderId: '121568832172',
	appId: '1:121568832172:web:6dfcb464c211e0c0190d09'
};

firebase.initializeApp(firebaseConfig);

export const app = ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

export default app;
