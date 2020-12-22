import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Header.styles.sass';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

function Header({ currentUser, hidden }) {
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
        <CartIcon></CartIcon>
      </div>
      {hidden ? null : <CartDropdown></CartDropdown>}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
