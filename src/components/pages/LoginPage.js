import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import LoginForm from '../../forms/LoginForm';

class LoginPage extends Component {
	submit = (data) => {
		this.props.login(data).then(() => this.props.history.push('/dashboard'));
	};
	render() {
		return (
			<div>
				<LoginForm submit={this.submit} />
			</div>
		);
	}
}
export default connect(null, { login })(LoginPage);
