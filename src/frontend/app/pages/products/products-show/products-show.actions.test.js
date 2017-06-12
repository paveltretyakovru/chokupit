// Actions
import {routeToProduct} from './products-show.actions';

// Constants
import {PRODUCTS_ROUTE} from './products-show.constants';

describe('>>> PRODUCTS SHOW ACTIONS', () => {
  let dispatch;
  
  beforeEach(() => {
    dispatch = jest.fn(
      (dispatchResult) => {
        return dispatchResult;
      }
    );
  });

  describe('>>> routeToProduct', () => {
    
    it('+++ должен быть определен', () => {
      expect(routeToProduct).toBeDefined();
    });

    it('+++ должен быть функцией', () => {
      expect(typeof routeToProduct).toEqual('function');
    });

    it('+++ должен вызвать диспатч переправить на продукт с ID = 1', () => {
      let expectedResult = {
        type: '@@router/CALL_HISTORY_METHOD',
        payload: {
          method: 'push',
          args: [`${PRODUCTS_ROUTE}/1`],
        },
      };

      expect(routeToProduct(1)(dispatch)).toEqual(expectedResult);
    });
  });
});