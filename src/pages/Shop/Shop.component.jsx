import React from 'react';
import { Route } from 'react-router-dom';

import './Shop.styles.sass';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import Collection from '../Collection/Collection.component';

function Shop({ match }) {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverview}
      ></Route>
      <Route
        path={`${match.path}/:collectionId`}
        component={Collection}
      ></Route>
    </div>
  );
}

export default Shop;
