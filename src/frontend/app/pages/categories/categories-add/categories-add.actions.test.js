// Actions
import {addCategory} from './categories-add.actions';

// Constants
import {ADD_CATEGORY} from './categories-add.constants';

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
    
});
  