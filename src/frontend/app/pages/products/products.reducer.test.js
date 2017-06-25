// Reducer
import productsReducer from './products.reducer';

// Constants
import { ADD_PRODUCT } from './products.constants';

// States
import { initState as products } from './products.reducer';

describe('>>> PRODUCTS REDUCER --- ADD_PRODUCT', () => {
  
  it('+++ constant ADD_PRODUCT should be defined', () => {
    expect(ADD_PRODUCT).toBeDefined();
  });

  it('+++ should adding new product to state', () => {
    let newProduct = {
      id: 2,
      title: 'Second product',
      categories: [1, 2],
    };
    let state = productsReducer(state, {
      type: ADD_PRODUCT,
      payload: newProduct,
    });

    // Количество моделей должно увеличиться
    expect(state.collection.length)
      .toEqual(products.collection.length + 1);
    
    // В коллекции присутсвует добавленная модель 
    expect(state.collection.find(el => (el.id === newProduct.id)))
      .toBeDefined();
  });
    
    
});