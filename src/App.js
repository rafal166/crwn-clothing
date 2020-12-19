import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.sass';

import Homepage from './pages/Homepage/Homepage.component';
import Shop from './pages/Shop/Shop.component';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp.component';
import Header from './components/Header/Header.component';

import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={Shop}></Route>
          <Route exact path="/signin" component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

// Switch renders only first match route
