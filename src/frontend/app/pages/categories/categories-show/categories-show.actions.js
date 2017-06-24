// Core && libs
import {push} from 'react-router-redux';

// Constants
import {CATEGORIES_ROUTE} from './categories-show.constants';

export function routeToCategory(categoryId = 1) {
  return dispatch => {
    return dispatch(push(`${CATEGORIES_ROUTE}/${categoryId}`));
  }
}