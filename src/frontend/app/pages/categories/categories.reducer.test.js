// Constants
import {ADD_CATEGORY} from './categories-add/categories-add.constants';

// Reducer
import categoriesReducer from './categories.reducer';

describe('>>> Categories reducer', () => {
  
  it('+++ ADD_CATEGORY constants should be defined', () => {
    expect(ADD_CATEGORY).toBeDefined();
  });


  it('+++ should add new category to state', () => {
    let newCategory = {id: 2, name: 'Work'};
    let state = categoriesReducer(state, {
      type: ADD_CATEGORY,
      payload: newCategory,
    });

    expect(state.list.length).toEqual(2);
    expect(state.list[1]).toEqual(newCategory);
  });
});
  