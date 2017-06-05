import React from 'react';
import { Route } from 'react-router';

import CategoriesAddContainer from './categories-add.container';

export default (
    <Route
        path={CategoriesAddContainer.path}
        component={CategoriesAddContainer}
    />
);
