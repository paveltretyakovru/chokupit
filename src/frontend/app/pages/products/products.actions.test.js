// Products actions
import {
  addProduct,
  routeToAddProduct,
} from './products.actions';

// Products constants
import {
  ADD_PRODUCT,
  PRODUCTS_ADD_ROUTE,
} from './products.constants';


describe('>>> PRODUCTS ACTIONS', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn(
      (dispatchResult) => {
        return dispatchResult;
      }
    );
  });

  
  describe('>>> addProduct', () => {
    it('+++ should be defined', () => {
      expect(addProduct).toBeDefined();
    });

    
    it('+++ should be a function', () => {
      expect(typeof addProduct).toEqual('function');
    });

    
    it('+++ should return a function', () => {
      expect(typeof addProduct()).toEqual('function');
    });

    
    it('+++ should return redux expect object', () => {
      let expectObject = {
        type: ADD_PRODUCT,
        payload: {
          name: 'New added product',
        },
      };

      expect(addProduct('New added product')(dispatch)).toEqual(expectObject);
    });

    it('+++ should prepare product name thouth argument', () => {
      let expectObject = {
        type: ADD_PRODUCT,
        payload: {
          name: 'Test name',
        },
      };

      expect(addProduct('Test name')(dispatch)).toEqual(expectObject);
    });

  });
  
  describe('>>> routeToAddProduct', () => {
    
    it('+++ should be defined', () => {
      expect(routeToAddProduct).toBeDefined();
    });
    
    it('+++ should be a function', () => {
      expect(typeof routeToAddProduct).toEqual('function');
    });

    it('+++ should dispatch push to ADD_PRODUCT_ROUTE', () => {
      let expectedResult = {
        type: '@@router/CALL_HISTORY_METHOD',
        payload: {
          method: 'push',
          args: [PRODUCTS_ADD_ROUTE],
        },
      }

      expect(routeToAddProduct()(dispatch)).toEqual(expectedResult);
    });

  });
 
});
  