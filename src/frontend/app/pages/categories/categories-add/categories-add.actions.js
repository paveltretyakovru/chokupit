// Core & ui
import {push} from 'react-router-redux';

// Constants
import {
  ADD_CATEGORY,
  CATEGORIES_ADD_ROUTE,
} from './categories-add.constants';

export function addCategory(payload = {}) {
  return dispatch => {
    return dispatch({
      type: ADD_CATEGORY,
      payload: payload,
    });
  }
}

export function routeToAddCategory() {
  return dispatch => {
    return dispatch(push(CATEGORIES_ADD_ROUTE));
  }
}