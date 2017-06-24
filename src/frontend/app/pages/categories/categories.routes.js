import React from 'react';
import {Route} from 'react-router';

// Components
import CategoriesContainer from './categories.container';

// Routes
import CategoriesAddRoutes from './categories-add/categories-add.routes';
import CategoriesShowRoutes from './categories-show/categories-show.routes';

export default (
    <Route>
        <Route path={CategoriesContainer.path} component={CategoriesContainer} />
        {CategoriesAddRoutes}
        {CategoriesShowRoutes}
    </Route>
);
