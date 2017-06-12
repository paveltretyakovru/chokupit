// Products actions
import {
  addProduct,
  routeToProduct,
  routeToAddProduct,
} from './products.actions';

describe('>>> PRODUCTS ACTIONS', () => {

  it('addProduct action should be defined', () => {
    expect(addProduct).toBeDefined();
  });
  
  it('routeToAddProduct action should be defined', () => {
    expect(routeToAddProduct).toBeDefined();
  });

  describe('>>> routeToProduct', () => {
    it('+++ должна быть определена', () => {
      expect(routeToProduct).toBeDefined();
    });
  });

});
