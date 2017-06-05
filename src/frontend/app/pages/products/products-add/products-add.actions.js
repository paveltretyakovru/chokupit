// Core & Libs
import {push} from 'react-router-redux';

// Constants
import {
  ADD_PRODUCT,
  PRODUCTS_ADD_ROUTE,
} from './products-add.constants';

// Actions
export function addProduct(name = 'A product without name') {
  return (dispatch) => {
    return dispatch({
      type: ADD_PRODUCT,
      payload: {
        name: name,
      },
    });
  }
}

export function routeToAddProduct() {
  return (dispatch) => {
    return dispatch(push(PRODUCTS_ADD_ROUTE));
  }
}