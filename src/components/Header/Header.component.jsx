import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	Option,
} from './Header.styles';

function Header({ currentUser, hidden }) {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo"></Logo>
			</LogoContainer>
			<OptionsContainer>
				<Option as={Link} to="/shop">
					Shop
				</Option>
				<Option as={Link} to="/shop">
					Contact
				</Option>
				{currentUser ? (
					<Option as="div" onClick={() => auth.signOut()}>
						SignOut
					</Option>
				) : (
					<Option as={Link} to="/signin">
						SignIn
					</Option>
				)}
				<CartIcon></CartIcon>
			</OptionsContainer>
			{hidden ? null : <CartDropdown></CartDropdown>}
		</HeaderContainer>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
