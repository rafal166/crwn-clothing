import React from 'react';
import { connect } from 'react-redux';

import './Collection.styles.sass';

import CollectionItem from '../../components/CollectionItem/CollectionItem.component';

import { selectCollection } from '../../redux/shop/shop.selector';

function Collection({ collection }) {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
