import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

var composeEnhancers = null;
var middlewares = null;
var store = null;

const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV === 'development') {
	// store for development
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	middlewares = [logger, sagaMiddleware];
	store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(...middlewares))
	);
} else {
	// store for procuction
	composeEnhancers = compose;
	middlewares = [sagaMiddleware];
	store = createStore(rootReducer, applyMiddleware(...middlewares));
}
sagaMiddleware.run(rootSaga);

export { store };

export const persistor = persistStore(store);
