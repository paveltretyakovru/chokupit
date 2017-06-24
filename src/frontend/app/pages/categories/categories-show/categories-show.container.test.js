// Core && libs
import React from 'react';
import {mount, shallow} from 'enzyme';

// Self components
import {CategoriesShowContainer} from './categories-show.container';

// Constants
import {CATEGORIES_SHOW_ROUTE} from './categories-show.constants';

describe('CategoriesShowContainer', () => {
  let wrapper, wrapperShallow;

  const containerProps = {
    params: {
      id: 1,
    },

    categories: {
      collection: [
        {id: 1, name: 'Test model 1'},
        {id: 2, name: 'Test model 2'},
      ],
    },
  }

  beforeEach(() => {
    wrapper = mount(<CategoriesShowContainer {...containerProps} />);
    wrapperShallow = shallow(<CategoriesShowContainer {...containerProps} />);
  });

  it('+++ должен рендериться', () => {
    expect(wrapper).toBeDefined();
  });

  it('+++ должен содержать параметр path', () => {
    expect(CategoriesShowContainer.path).toBeDefined();
  });
  
  it('+++ параметр path должен быть равен константе CATEGORIES_SHOW_ROUTE',() => {
    expect(CategoriesShowContainer.path).toEqual(CATEGORIES_SHOW_ROUTE);
  });

  describe('>>> Методы контейнера', () => {
    let methods;

    beforeEach(() => {
      methods = wrapperShallow.instance();
    });

    describe('>>> Метод getCategoryModel', () => {
      let getCategoryModel, expectModel;

      beforeEach(() => {
        getCategoryModel = methods.getCategoryModel;
        expectModel = {
          id: 1,
          name: 'Test model 1',
        }
      });

      it('+++ должен быть определен', () => {
        expect(getCategoryModel).toBeDefined();
      });

      it('+++ должен вернуть объект', () => {
        expect(typeof getCategoryModel(containerProps.categories.collection, 1))
          .toEqual('object');
      });

      it('+++ должен вернуть ожидаей объект, при переданных параметрах', () => {
        expect(getCategoryModel(containerProps.categories.collection, 1))
          .toEqual(expectModel);
      });

      it('+++ должен вернуть пустой объект, если не найдена модель', () => {
        expect(getCategoryModel()).toEqual({});
      });
    });
  });
});