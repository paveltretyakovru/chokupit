// Actions
import {addCategory, routeToAddCategory} from './categories-add.actions';

// Constants
import {ADD_CATEGORY, CATEGORIES_ADD_ROUTE} from './categories-add.constants';

describe('>>> Categories Add Actions', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn(
      (dispatchResult) => {
        return dispatchResult;
      }
    );
  });
  
  describe('>>> addCategory action', () => {
    
    it('+++ should be defined', () => {
      expect(addCategory).toBeDefined();
    });
    
    it('+++ should be a function', () => {
      expect(typeof addCategory).toEqual('function');
    });

    it('+++ should return a function', () => {
      expect(typeof addCategory()).toEqual('function');
    });

    it('+++ should return redux expect object', () => {
      let expectObject = {
        type: ADD_CATEGORY,
        payload: {name: 'Friends'},
      };

      expect(addCategory({name: 'Friends'})(dispatch)).toEqual(expectObject);
    });
      
  });
  
  describe('>>> routeToAddCategory action', () => {
    
    it('+++ CATEGORIES_ADD_ROUTE constant should be defined', () => {
      expect(CATEGORIES_ADD_ROUTE).toBeDefined();
    });
      
    it('+++ should be defined', () => {
      expect(routeToAddCategory).toBeDefined();
    });
      
    it('+++ should be a function', () => {
      expect(typeof routeToAddCategory).toEqual('function');
    });
    
    it('+++ should dispatch push to CATEGORIES_ADD_ROUTE', () => {
      const expectResult = {
        type: '@@router/CALL_HISTORY_METHOD',
        payload: {
          method: 'push',
          args: [CATEGORIES_ADD_ROUTE],
        },
      }

      expect(routeToAddCategory()(dispatch)).toEqual(expectResult);
    });
      
        
  });
    
    
});
  