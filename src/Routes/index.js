// react libraries
import * as React from 'react';

// third party packages
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Navbar from '../components/Navbar';
import Home from '../pages/Home';

const Routes = () => (
	<BrowserRouter>
		<Navbar />
		<Switch>
			<Route exact={true} path="/" component={Home} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
