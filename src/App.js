import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.sass';

// pages
import Homepage from './pages/Homepage/Homepage.component';
import Shop from './pages/Shop/Shop.component';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp.component';
import Checkout from './pages/Checkout/Checkout.component';
// components
import Header from './components/Header/Header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			} else setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header></Header>
				<Switch>
					<Route exact path="/" component={Homepage}></Route>
					<Route path="/shop" component={Shop}></Route>
					<Route exact path="/checkout" component={Checkout}></Route>
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/"></Redirect>
							) : (
								<SignInAndSignUp></SignInAndSignUp>
							)
						}
					></Route>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// Switch renders only first match route
