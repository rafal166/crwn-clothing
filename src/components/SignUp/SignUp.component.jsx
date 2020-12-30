import React, { useState } from 'react';
import './SignUp.styles.sass';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export default function SignUp() {
	const [userCredentials, setUserCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });

			setUserCredentials({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					handleChange={handleChange}
					required
					label="Display Name"
				/>{' '}
				<FormInput
					type="text"
					name="email"
					value={email}
					handleChange={handleChange}
					required
					label="Email"
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					handleChange={handleChange}
					required
					label="Password"
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					handleChange={handleChange}
					required
					label="Confirm password"
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
}
