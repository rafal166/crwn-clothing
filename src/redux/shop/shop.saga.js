import { takeEvery, call, put } from 'redux-saga/effects';

import { ShopActionTypes } from './shop.types';
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from './shop.actions';

export function* fetchCollectionAsync() {
	yield console.log('I am fired');

	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(
			// dodajemy yield, żeby sagaMiddleware mogło to zatrzymać też w tym miejscu jeśli będzie potrzeba
			convertCollectionsSnapshotToMap,
			snapshot
		);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionStart() {
	yield takeEvery(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionAsync
	);
}
