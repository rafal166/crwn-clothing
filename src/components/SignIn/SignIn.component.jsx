import React, { useState } from 'react';
import './SignIn.styles.sass';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default function SignIn() {
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const { email, password } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.error(error);
		}

		setCredentials({ email: '', password: '' });
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2 className="title">I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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

				<div className="buttons">
					<CustomButton type="submit">SIGN IN</CustomButton>
					<CustomButton
						type="button"
						isGoogleSignIn
						onClick={signInWithGoogle}
					>
						Sign In with google
					</CustomButton>
				</div>
			</form>
		</div>
	);
}
