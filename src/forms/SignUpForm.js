import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineErrors from '../components/messages/InlineError';

export default class SignUpForm extends Component {
	state = {
		data: {
			email: '',
			password: ' '
		},
		loading: false,
		errors: {}
	};
	onChange = (event) => {
		this.setState({
			data: { ...this.state.data, [event.target.name]: event.target.value }
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props.submit(this.state.data);
			// .catch((err) =>
			// 	this.setState({
			// 		errors: err.response.data.errors
			// 	})
			// );
		}
	};
	validate = (data) => {
		const errors = {};
		if (!Validator.isEmail(data.email)) errors.email = 'Invalid Email';
		if (!data.password) errors.password = 'Cannot be empty';
		return errors;
	};
	render() {
		const { data, errors, loading } = this.state;
		return (
			<Form onSubmit={this.handleSubmit} loading={loading}>
				<Form.Field error={!!errors.email}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="example@example.com"
						value={data.email}
						onChange={this.onChange}
					/>
					{errors.email && <InlineErrors text={errors.email} />}
				</Form.Field>
				<Form.Field error={!!errors.password}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Secret Password"
						value={data.password}
						onChange={this.onChange}
					/>
					{errors.password && <InlineErrors text={errors.password} />}
				</Form.Field>
				<Button primary>Sign Up</Button>
			</Form>
		);
	}
}
