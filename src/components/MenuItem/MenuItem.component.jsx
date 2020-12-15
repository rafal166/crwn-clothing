import React from "react";
import { withRouter } from "react-router-dom";

import "./MenuItem.styles.sass";

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <div
      className={`menu-item ${size || ""}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);

//onClick={() => history.push(`${match.url}${linkUrl}`) }> - // redirect to any url, no matter what is matched
