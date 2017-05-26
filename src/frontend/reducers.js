// Libs
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import appReducer from './app/app.reducer';
import indexReducer from './app/pages/index/index.reducer';
import contactsReducer from './app/pages/contacts/contacts.reducer';
import headerReducer from './app/shared/header/header.reducer';
import productsReducer from './app/pages/products/products.reducer';

console.log('Hello world');

export default combineReducers({
  // ...reducers,
  app: appReducer,
  index: indexReducer,
  header: headerReducer,
  routing: routerReducer,
  contacts: contactsReducer,
  products: productsReducer,
})
