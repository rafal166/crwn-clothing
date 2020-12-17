import React, { Component } from 'react';
import './Shop.styles.sass';
import SHOP_DATA from '../../data/shop.data';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionProps}
          ></CollectionPreview>
        ))}
      </div>
    );
  }
}
