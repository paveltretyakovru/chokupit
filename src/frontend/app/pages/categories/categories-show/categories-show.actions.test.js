// Actions
import {routeToCategory} from './categories-show.actions';

// Constants
import {CATEGORIES_ROUTE} from './categories-show.constants';

describe('>>> CATEGORIES SHOW ACTIONS', () => {
  let dispatch;
  
  beforeEach(() => {
    dispatch = jest.fn(
      (dispatchResult) => {
        return dispatchResult;
      }
    );
  });

  describe('>>> routeToCategory', () => {
    
    it('+++ должен быть определен', () => {
      expect(routeToCategory).toBeDefined();
    });

    it('+++ должен быть функцией', () => {
      expect(typeof routeToCategory).toEqual('function');
    });

    it('+++ должен вызвать диспатч переправить на категорию с ID = 1', () => {
      let expectedResult = {
        type: '@@router/CALL_HISTORY_METHOD',
        payload: {
          method: 'push',
          args: [`${CATEGORIES_ROUTE}/1`],
        },
      };

      expect(routeToCategory(1)(dispatch)).toEqual(expectedResult);
    });
  });
});