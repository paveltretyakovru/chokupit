// Constants
import {
  ADD_PRODUCT,
} from './products.constants';

let initState = {
  products: [
    {
      id: 1,
      title: 'Test product title',
    },
  ],
}

export default function (state = initState, action) {
  
  switch (action.type) {
  
  case ADD_PRODUCT:
    let products = [...state.products];
    products.push(action.payload);
    return { ...state, products:  products};
  
  default:
    return { ...state };
  }

}