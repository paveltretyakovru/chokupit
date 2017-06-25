
// Constants
import {ADD_CATEGORY} from './categories-add/categories-add.constants';
import {
  CITCHEN_CATEGORY_NAME,
  ALL_PRODUCT_CATEGORY_LABEL,
} from './categories.constants';

export const initState = {
  collection: [
    {
      id: 0,
      name: ALL_PRODUCT_CATEGORY_LABEL,
    },
    {
      id: 1,
      name: CITCHEN_CATEGORY_NAME,
    },
  ],
}


export default function(state = initState, action) {
  const categories = state.collection ? [...state.collection] : [];

  switch(action.type) {

    case ADD_CATEGORY: {
      categories.push({
        id: action.payload.id || state.collection.length + 1,
        ...action.payload,
      });
      return { ...state, collection: categories };
    }
    default: {
      return { ...state };
    }

  }
}
