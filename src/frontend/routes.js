// ============== CORE & LIBS ==================================================
import React from 'react';
import {Route, IndexRoute} from 'react-router';

// ============== Containers & Components ======================================
import AppContainer from './app/app.container';
import IndexContainer from './app/pages/index/index.container';
import Page404Component from './app/pages/page-404.component';

// ============== Router components ============================================
import ContactsRoutes from './app/pages/contacts/contacts.routes';
import ProductsRoutes from './app/pages/products/products.routes';
import CategoriesRoutes from './app/pages/categories/categories.routes';

// ============== Routes paths =================================================
export {INDEX_ROUTE} from './app/pages/index/index.constants';

export {PRODUCTS_ROUTE} from './app/pages/products/products.constants';
export {ALL_PRODUCTS_ROUTE} from './app/pages/products/products.constants';

export {CONTACTS_ROUTE} from './app/pages/contacts/contacts.constants';
export {CONTACTS_AUTHORS_ROUTE} from './app/pages/contacts/contacts-authors/contacts-authors.constants';

export {CATEGORIES_ROUTE} from './app/pages/categories/categories.constants';
export {CATEGORIES_ADD_ROUTE} from './app/pages/categories/categories-add/categories-add.constants';

// ============== MAIN ROUTER COMPONENT ========================================
export default (
  <Route path={IndexContainer.path} component={AppContainer} >
      <IndexRoute component={IndexContainer} />

      {/* Contacts */}
      {ContactsRoutes}

      {/* products */}
      {ProductsRoutes}

      {/* categories */}
      {CategoriesRoutes}

      <Route path="*" component={Page404Component} />
  </Route>
);
