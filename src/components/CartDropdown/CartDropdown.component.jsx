import React from 'react';

import './CartDropdown.styles.sass';

import CustomButton from '../CustomButton/CustomButton.component';

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
}

export default CartDropdown;
