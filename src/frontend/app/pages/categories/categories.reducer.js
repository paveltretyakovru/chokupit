import {ADD_CATEGORY} from './categories-add/categories-add.constants';

const initState = {
  list: [
    {
      id: 1,
      name: 'Friends',
    },
  ],
}


export default function(state = initState, action) {
  const categories = state.list ? [...state.list] : [];

  switch(action.type) {

  case ADD_CATEGORY:
    categories.push({
      ...action.payload,
      id: action.payload.id || state.list.length + 1,
    });

    return {...state, list: categories};

  default:
    return { ...state };
  }
}
