// Reducer
import productsReducer from './products.reducer';

// Constants
import {
  ADD_PRODUCT,
} from './products.constants';

describe('>>> PRODUCTS REDUCER --- ADD_PRODUCT', () => {
  
  it('+++ constant ADD_PRODUCT should be defined', () => {
    expect(ADD_PRODUCT).toBeDefined();
  });

  it('+++ should adding new product to state', () => {
    let newProduct = {id: 2, title: 'Second product' };
    let state = productsReducer(state, {
      type: ADD_PRODUCT,
      payload: newProduct,
    });

    expect(state.list.length).toEqual(2);
    expect(state.list[1]).toEqual(newProduct);
  });
    
    
});