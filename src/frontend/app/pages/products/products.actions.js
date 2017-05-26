import {
  ADD_PRODUCT,
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