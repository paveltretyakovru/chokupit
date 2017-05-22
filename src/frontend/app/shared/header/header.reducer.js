import {
  UPDATE_HEADER_TITLE,
} from './header.constants';

import { DEFAULT_HEADER_TITILE } from 'app/app.constants';

const initState = {
  headerTitle: DEFAULT_HEADER_TITILE,
};

export default function(state = initState, action) {
  switch(action.type) {

  case UPDATE_HEADER_TITLE:
    return { ...state,  headerTitle: action.payload };

  default:
    return state;

  }
}
