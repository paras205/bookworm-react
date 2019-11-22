import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';

const Homepage = ({ isAuthenicated, logout }) => {
	return (
		<div>
			<h1>Homepage</h1>
			{isAuthenicated ? <button onClick={() => logout()}>Logout</button> : <Link to="/login">Login</Link>}
		</div>
	);
};
function mapStateToProps(state) {
	return {
		isAuthenicated: !!state.user.token
	};
}
export default connect(mapStateToProps, { logout })(Homepage);
