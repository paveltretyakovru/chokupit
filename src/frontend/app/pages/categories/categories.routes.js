import React from 'react';
import { Route } from 'react-router';

import CategoriesContainer from './categories.container';

export default (
    <Route>
        <Route path={CategoriesContainer.path} component={CategoriesContainer} />
    </Route>
);
