import { routeTo, routeToBack } from './app.actions';

describe('>>> APP ACTIONS', () => {

  describe('routeTo() function', () => {
    it('+++ should be exists', () => {
      expect(routeTo).toBeDefined();
    });

    it('+++ should return function', () => {
      let resultFunction = routeTo();
      expect(typeof resultFunction).toBe('function');
    });

    it('+++ should return the react-router-redux "push" dispath object', () => {
      const dispatch = jest.fn((dispatchResult) => { return dispatchResult; });
      const expectedResult = {
        type: '@@router/CALL_HISTORY_METHOD',
        payload: {
          method: 'push',
          args: [ '/route-path' ],
        },
      }

      expect(routeTo('/route-path')(dispatch)).toEqual(expectedResult);
    });
  });
    
  describe('routeToBack() function', () => {
    
    it('+++ should be defined', () => {
      expect(routeToBack).toBeDefined();
    });
      
  });
  
});