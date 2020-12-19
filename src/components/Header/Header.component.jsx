import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.sass';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

export default function Header({ currentUser }) {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/shop" className="option">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SignOut
          </div>
        ) : (
          <Link to="/signin" className="option">
            SignIn
          </Link>
        )}
      </div>
    </div>
  );
}
