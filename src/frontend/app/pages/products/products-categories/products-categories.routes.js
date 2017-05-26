import React from 'react';
import { Route } from 'react-router';

import ProductsCategoriesContainer from './products-categories.container';

export default (
    <Route
        path={ProductsCategoriesContainer.path}
        component={ProductsCategoriesContainer}
    />
);
