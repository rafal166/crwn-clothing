import React from 'react';
import { connect } from 'react-redux';

import './CartDropdown.styles.sass';

import CustomButton from '../CustomButton/CustomButton.component';
import CartItem from '../CartItem/CartItem.component';

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem}></CartItem>
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps, null)(CartDropdown);
