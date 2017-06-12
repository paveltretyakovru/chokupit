import React from 'react';
import { Route } from 'react-router';

import {ProductsShowContainer} from './products-show.container';

export default (
    <Route
        path={ProductsShowContainer.path}
        component={ProductsShowContainer}
    />
);
