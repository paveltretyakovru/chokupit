import {push} from 'react-router-redux';

import {
  ADD_PRODUCT,
  ADD_PRODUCT_ROUTE,
} from './products.constants';

export function addProduct() {
  return (dispatch) => {
    return dispatch({
      type: ADD_PRODUCT,
      payload: {
        title: 'New added product',
      },
    });
  }
}

export function routeToAddProduct() {
  return (dispatch) => {
    return dispatch(push(ADD_PRODUCT_ROUTE));
  }
}