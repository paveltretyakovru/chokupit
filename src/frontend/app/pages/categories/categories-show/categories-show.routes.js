import React from 'react';
import { Route } from 'react-router';

import CategoriesShowRoutes from './categories-show.container';

export default (
    <Route
        path={CategoriesShowRoutes.path}
        component={CategoriesShowRoutes}
    />
);
