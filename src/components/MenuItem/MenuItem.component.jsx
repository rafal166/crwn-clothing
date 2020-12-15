import React from "react";

import "./MenuItem.styles.sass";

export default function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`menu-item ${size || ""}`}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <h1 className='subtitle'>SHOP NOW</h1>
        </div>
      </div>
    </div>
  );
}
