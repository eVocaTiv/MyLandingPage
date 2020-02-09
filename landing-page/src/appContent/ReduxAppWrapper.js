import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@store/configureStore';
import appState from '@store/';
import AppWrapper from '@appContent/AppWrapper';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = configureStore(appState);
  return (
    <Provider store={store}>
      <AppWrapper>{element}</AppWrapper>
    </Provider>
  );
};
