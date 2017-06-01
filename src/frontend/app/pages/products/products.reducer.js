// Constants
import {
  ADD_PRODUCT,
} from './products.constants';

let initState = {
  list: [
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
    products = [...state.list];
    products.push({...action.payload, id: state.list.length + 1});

    return { ...state, list: products};
  
  default:
    return { ...state };
  }

}