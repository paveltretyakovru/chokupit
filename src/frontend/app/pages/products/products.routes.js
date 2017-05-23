import React from 'react';
import { Route } from 'react-router';

// Components
import ProductsContainer from './products.container';

// Routes
import ProductsCategoriesRoutes from './products-categories/products-categories.routes';

export default (
    <Route path={ ProductsContainer.path } >
         { ProductsCategoriesRoutes }
    </Route>
);
