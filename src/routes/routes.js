import React from 'react';
import { Router } from '@reach/router';
import DemoComponent from '@components/DemoComponent';

const getBaseRoute = "/";

// display different 'pages' here.
const Routes = (
  <Router style={{ height: '100%', width: '100%' }}>
    <DemoComponent path={getBaseRoute} />
  </Router>
)

export default Routes