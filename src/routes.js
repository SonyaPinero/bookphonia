import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './client/components/app';
import Index from './client/components/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
  </Route>
);
