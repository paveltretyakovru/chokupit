import {
  CONTACTS_ROUTE,
} from './contacts.constants';

import { push } from 'react-router-redux';

// Navigation functions
export function routeToContacts() {
  return (dispatch) => {
    dispatch(push(CONTACTS_ROUTE));
  }
}
