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
    let state = {
      products: [
        { title: 'First product' },
      ],
    }

    state = productsReducer(state, {
      type: ADD_PRODUCT,
      payload: { title: 'Second product' },
    });


    console.log('new state ---->', state);
    expect(state.products.length).toEqual(2);
  });
    
    
});