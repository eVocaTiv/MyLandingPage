// import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@sagas/';
import rootReducer from './reducers';

// export const history = createHistory();

// Saga Middleware.
const sagaMiddleware = createSagaMiddleware();

// Middleware you want to use in development.
const enhancer = applyMiddleware(sagaMiddleware, logger);

export function configureStore(preloadedState) {
  const store = createStore(rootReducer, preloadedState, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
}
