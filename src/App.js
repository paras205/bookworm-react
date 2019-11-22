import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/Dashboard';
import SignUpPage from './components/pages/SignUpPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoutes from './components/routes/GuestRoutes';

export default function App({ location }) {
	return (
		<div className="ui container">
			<Route location={location} path="/" exact component={Homepage} />
			<GuestRoutes location={location} path="/login" exact component={LoginPage} />
			<GuestRoutes location={location} path="/signup" exact component={SignUpPage} />
			<UserRoute location={location} path="/dashboard" exact component={DashboardPage} />
		</div>
	);
}
