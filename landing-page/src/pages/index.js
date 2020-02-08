import React from 'react';
import App from '@appContent/App.js';
import { Provider } from 'react-redux';
import { configureStore } from '@store/configureStore';
import appState from '@store/';

const store = configureStore(appState);

// This is the root of the app whic is rendered.
// Enwrapped w/ provider for store context.

// TODO: Move other pages in this folder under Routes -> XYZPageContainer.
const IndexPage = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default IndexPage;
