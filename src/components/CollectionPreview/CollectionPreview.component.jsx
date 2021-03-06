import React from 'react';
import './CollectionPreview.styles.sass';

import CollectionItem from '../CollectionItem/CollectionItem.component';

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1>{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </div>
    </div>
  );
}
