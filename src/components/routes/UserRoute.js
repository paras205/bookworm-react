import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const UserRoute = ({ isAuthenicated, component: Component, ...rest }) => {
	return <Route {...rest} render={(props) => (isAuthenicated ? <Component {...props} /> : <Redirect to="/" />)} />;
};
function mapStateToProps(state) {
	return {
		isAuthenicated: !!state.user.token
	};
}
export default connect(mapStateToProps)(UserRoute);
