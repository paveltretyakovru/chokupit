// Core && libs
import {push} from 'react-router-redux';

// Constants
import {PRODUCTS_ROUTE} from './products-show.constants';

export function routeToProduct(productId = 1) {
  return dispatch => {
    return dispatch(push(`${PRODUCTS_ROUTE}/${productId}`));
  }
}