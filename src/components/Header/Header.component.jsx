import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.sass';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export default function Header() {
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
      </div>
    </div>
  );
}
