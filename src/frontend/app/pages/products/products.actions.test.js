// Products actions
import {
  addProduct,
} from './products.actions';

// Products constants
import {
  ADD_PRODUCT,
} from './products.constants';


describe('>>> PRODUCTS ACTIONS --- addProduct', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn(
      (dispatchResult) => {
        return dispatchResult;
      }
    );
  });

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
  