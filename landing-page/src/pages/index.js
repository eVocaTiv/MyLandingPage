import React from 'react';
import App from '@appContent/App.js';
import AppWrapper from '@appContent/AppWrapper';

// TODO: Move dynamic URLs under Routes -> XYZPageContainer.
// Keep static URLs under pages for build time static html rendering.
const IndexPage = () => (
    <App />
);

export default IndexPage;
