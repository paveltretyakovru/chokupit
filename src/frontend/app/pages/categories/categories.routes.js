import React from 'react';
import {Route} from 'react-router';

// Components
import CategoriesContainer from './categories.container';

// Routes
import CategoriesAddRoutes from './categories-add/categories-add.routes';

export default (
    <Route>
        <Route path={CategoriesContainer.path} component={CategoriesContainer} />
        {CategoriesAddRoutes}
    </Route>
);
