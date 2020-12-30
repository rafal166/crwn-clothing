import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './Shop.styles.sass';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { CollectionsOverviewContainer } from '../../components/CollectionsOverview/CollectionsOverview.container';
import { CollectionContainer } from '../Collection/Collection.container';

const Shop = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				component={CollectionsOverviewContainer}
			></Route>
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionContainer}
			></Route>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
