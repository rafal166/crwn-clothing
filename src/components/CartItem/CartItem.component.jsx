import React from 'react';

import './CartItem.styles.sass';

export default function CartItem({
  item: { imageUrl, price, name, quantity },
}) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item"></img>
      <div className="item-details">
        <div className="name">{name}</div>
        <div className="price">
          {quantity} x {price}
        </div>
      </div>
    </div>
  );
}
