// Constants
import {
  ADD_PRODUCT,
} from './products.constants';

let initState = {
  list: [
    {
      id: 1,
      title: 'Test product title',
    },
  ],
}

export default function (state = initState, action) {
  let products;

  switch (action.type) {
  
  case ADD_PRODUCT:
    products = [...state.list];
    products.push(action.payload);
    
    return { ...state, list: products};
  
  default:
    return { ...state };
  }

}