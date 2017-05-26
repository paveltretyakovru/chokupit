// Libs
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import appReducer from './app/app.reducer';
import indexReducer from './app/pages/index/index.reducer';
import contactsReducer from './app/pages/contacts/contacts.reducer';
import headerReducer from './app/shared/header/header.reducer';
import productsReducer from './app/pages/products/products.reducer';

export default combineReducers({
  // ...reducers,
  app: appReducer,
  header: headerReducer,
  routing: routerReducer,
  contacts: contactsReducer,

  ...productsReducer,
  ...indexReducer,
})
