// Libs
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import appReducer from './app/app.reducer';
import indexReducer from './app/pages/index/index.reducer';
import headerReducer from './app/shared/header/header.reducer';
import contactsReducer from './app/pages/contacts/contacts.reducer';
import productsReducer from './app/pages/products/products.reducer';
import categoriesReducer from './app/pages/categories/categories.reducer';

export default combineReducers({
  // ...reducers,
  app: appReducer,
  index: indexReducer,
  header: headerReducer,
  routing: routerReducer,
  contacts: contactsReducer,
  products: productsReducer,
  categories: categoriesReducer,
})
