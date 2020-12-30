import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import WithSpinner from '../../components/WithSpinner/WithSpinner.component';
import Collection from './Collection.component';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionsLoaded(state),
});

export const CollectionContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(Collection);
