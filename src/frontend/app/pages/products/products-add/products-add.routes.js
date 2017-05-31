import React from 'react';
import { Route } from 'react-router';

import ProductsAddContainer from './products-add.container';

export default (
    <Route
        path={ProductsAddContainer.path}
        component={ProductsAddContainer}
    />
);
