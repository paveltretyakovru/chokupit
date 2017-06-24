// Actions
import * as categoriesActions from './categories.actions';

describe('>>> Categories actions', () => {
  
  it('+++ addCategory action should be defined ', () => {
    expect(categoriesActions.addCategory).toBeDefined();
  });

  it('+++ rouetToCategory action should be defined', () => {
    expect(categoriesActions.routeToCategory).toBeDefined();
  });
    
});
  
