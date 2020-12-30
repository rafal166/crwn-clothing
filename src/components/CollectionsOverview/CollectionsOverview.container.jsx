import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';

import WithSpinner from '../WithSpinner/WithSpinner.component';
import CollectionsOverview from './CollectionsOverview.component';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching,
});

export const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);

// ===

// export const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
