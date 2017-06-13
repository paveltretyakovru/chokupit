// Constants
import {ADD_PRODUCT} from './products-add/products-add.constants';

let initState = {
  collection: [
    {
      id: 1,
      name: 'Test product name',
    },
  ],
}

export default function (state = initState, action) {
  let products;

  switch (action.type) {
  
  case ADD_PRODUCT:
    products = [...state.collection];
    products.push({...action.payload, id: state.collection.length + 1});

    return { ...state, collection: products};
  
  default:
    return { ...state };
  }

}