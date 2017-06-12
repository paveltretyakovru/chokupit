import {
  SWITCH_LEFT_MENU,
} from './app.constants';

export const initState = {
  isLeftMenuOpen: false,
}

export default function(state = initState, action) {
  switch(action.type) {
  case SWITCH_LEFT_MENU:
    return { ...state, isLeftMenuOpen: !state.isLeftMenuOpen }

  default:
    return { ...state };
  }
}
