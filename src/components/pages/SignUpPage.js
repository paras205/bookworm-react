import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../../forms/SignUpForm';
import { signUp } from '../../actions/users';

class SignUpPage extends Component {
	submit = (data) => this.props.signUp(data).then(() => this.props.history.push('/dashboard'));
	render() {
		return (
			<div>
				<SignUpForm submit={this.submit} />
			</div>
		);
	}
}
export default connect(null, { signUp })(SignUpPage);
