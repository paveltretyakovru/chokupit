import {ADD_CATEGORY} from './categories-add.constants';

export function addCategory(payload = {}) {
  return dispatch => {
    return dispatch({
      type: ADD_CATEGORY,
      payload: payload,
    });
  }
}