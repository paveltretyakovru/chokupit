// Products actions
import {
  addProduct,
  routeToAddProduct,
} from './products.actions';

// Products constants
import {
  ADD_PRODUCT,
  ADD_PRODUCT_ROUTE,
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

    
    it('+++ should be function', () => {
      expect(typeof addProduct).toEqual('function');
    });

    
    it('+++ should return function', () => {
      expect(typeof addProduct()).toEqual('function');
    });

    
    it('+++ should return redux expect object', () => {
      const expectObject = {
        type: ADD_PRODUCT,
        payload: {
          title: 'New added product',
        },
      };

      expect(addProduct('')(dispatch)).toEqual(expectObject);
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
          args: [ADD_PRODUCT_ROUTE],
        },
      }

      expect(routeToAddProduct()(dispatch)).toEqual(expectedResult);
    });

  });
 
});
  