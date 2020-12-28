import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

var composeEnhancers = null;
var middlewares = null;
var store = null;
if (process.env.NODE_ENV === 'development') {
  // store for development
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  middlewares = [logger];
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
} else {
  // store for procuction
  composeEnhancers = compose;
  middlewares = [];
  store = createStore(rootReducer, applyMiddleware(...middlewares));
}

export { store };
export const persistor = persistStore(store);
