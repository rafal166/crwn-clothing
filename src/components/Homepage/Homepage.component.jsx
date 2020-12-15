import React from "react";
import "./Homepage.styles.sass";

export default function Homepage() {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>HATS</h1>
            <h1 className='subtitle'>SHOP NOW</h1>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>JACKETS</h1>
            <h1 className='subtitle'>SHOP NOW</h1>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>SNIKERS</h1>
            <h1 className='subtitle'>SHOP NOW</h1>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>WOMAN</h1>
            <h1 className='subtitle'>SHOP NOW</h1>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>MAN</h1>
            <h1 className='subtitle'>SHOP NOW</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
