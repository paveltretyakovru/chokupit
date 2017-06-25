// Constants
import {ADD_CATEGORY} from './categories-add/categories-add.constants';

// Reducer
import categoriesReducer, {initState as categories} from './categories.reducer';

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

    // Количество элементов должно увеличиться
    expect(state.collection.length)
      .toEqual(categories.collection.length + 1);

    // В коллекции присутсвует добавленная модель
    expect(state.collection.find(el => (el.id === newCategory.id)))
      .toBeDefined();
  });
});
  