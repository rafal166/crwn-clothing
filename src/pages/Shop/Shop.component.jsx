import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './Shop.styles.sass';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import Collection from '../Collection/Collection.component';
import WithSpinner from '../../components/WithSpinner/WithSpinner.component';

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
	state = { isLoading: true };

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const collectionRef = firestore.collection('collections');

		collectionRef.onSnapshot(async (snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

			this.props.updateCollections(collectionsMap);
			console.log(collectionsMap);

			this.setState({ isLoading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { isLoading } = this.state;

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner
							isLoading={isLoading}
							{...props}
						></CollectionsOverviewWithSpinner>
					)}
				></Route>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionWithSpinner
							isLoading={isLoading}
							{...props}
						></CollectionWithSpinner>
					)}
				></Route>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
