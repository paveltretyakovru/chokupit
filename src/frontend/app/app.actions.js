import { goBack, push } from 'react-router-redux';

import {
  SWITCH_LEFT_MENU,
} from './app.constants';

export function routeTo(route = '/') {
  return dispatch => {
    return dispatch(push(route));
  }
}

export const routeToBack = () => dispatch => dispatch(goBack());
export const switchLeftMenu = () => dispatch => dispatch({type: SWITCH_LEFT_MENU});