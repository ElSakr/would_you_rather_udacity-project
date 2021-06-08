import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import { watchSagas } from './sagas';

// Persist data
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['login', 'questions'] // which reducer want to store
};
const persistedReducer = persistReducer(persistConfig, reducers);

const saga = createSagaMiddleware();
//redux dev tool
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(saga));
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);
saga.run(watchSagas);

export { persistor, store };
