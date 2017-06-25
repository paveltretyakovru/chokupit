// Constants
import {ADD_PRODUCT} from './products-add/products-add.constants';

export const initState = {
  collection: [
    {
      id: 1,
      name: 'Test product name',
      categories: [0],
    },
  ],
}

export default function (state = initState, action) {
  let products;

  switch (action.type) {
    case ADD_PRODUCT: {
      products = [...state.collection];
      products.push({
        ...action.payload,
        id: state.collection.length + 1,
        categories: [0, ...action.payload.categories] || [0],
      });
      return { ...state, collection: products };
    }
      
    default: {
      return { ...state };
    }
  } // switch

}