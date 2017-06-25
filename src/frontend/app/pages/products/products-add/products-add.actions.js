// Core & Libs
import {push} from 'react-router-redux';

// Constants
import {
  ADD_PRODUCT,
  PRODUCTS_ADD_ROUTE,
} from './products-add.constants';

// Actions
export function addProduct(opts = {}) {
  return (dispatch) => {
    return dispatch({
      type: ADD_PRODUCT,
      payload: (typeof opts === 'string')
        ? {name: opts}
        : opts,
    });
  }
}

export function routeToAddProduct() {
  return (dispatch) => {
    return dispatch(push(PRODUCTS_ADD_ROUTE));
  }
}