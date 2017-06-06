// Products actions
import {
  addProduct,
  routeToAddProduct,
} from './products.actions';

describe('>>> PRODUCTS ACTIONS', () => {

  it('addProduct action should be defined', () => {
    expect(addProduct).toBeDefined();
  });
  
  it('routeToAddProduct action should be defined', () => {
    expect(routeToAddProduct).toBeDefined();
  });

});
  