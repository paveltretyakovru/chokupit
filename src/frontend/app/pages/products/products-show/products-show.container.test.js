// Core && libs
import React from 'react';
import {mount, shallow} from 'enzyme';

// Self components
import {ProductsShowContainer} from './products-show.container';

// Constants
import {PRODUCTS_SHOW_ROUTE} from './products-show.constants';

describe('ProductsShowContainer', () => {
  let wrapper, wrapperShallow;

  const containerProps = {
    params: {
      id: 1,
    },

    products: {
      collection: [
        {id: 1, name: 'Test model 1'},
        {id: 2, name: 'Test model 2'},
      ],
    },
  }

  beforeEach(() => {
    wrapper = mount(<ProductsShowContainer {...containerProps} />);
    wrapperShallow = shallow(<ProductsShowContainer {...containerProps} />);
  });

  it('+++ должен рендериться', () => {
    expect(wrapper).toBeDefined();
  });

  it('+++ должен содержать параметр path', () => {
    expect(ProductsShowContainer.path).toBeDefined();
  });
  
  it('+++ параметр path должен быть равен константе PRODUCTS_SHOW_ROUTE',() => {
    expect(ProductsShowContainer.path).toEqual(PRODUCTS_SHOW_ROUTE);
  });

  describe('>>> Методы контейнера', () => {
    let methods;

    beforeEach(() => {
      methods = wrapperShallow.instance();
    });

    describe('>>> Метод getProductModel', () => {
      let getProductModel, expectModel;

      beforeEach(() => {
        getProductModel = methods.getProductModel;
        expectModel = {
          id: 1,
          name: 'Test model 1',
        }
      });

      it('+++ должен быть определен', () => {
        expect(getProductModel).toBeDefined();
      });

      it('+++ должен вернуть объект', () => {
        expect(typeof getProductModel(containerProps.products.collection, 1))
          .toEqual('object');
      });

      it('+++ должен вернуть ожидаей объект, при переданных параметрах', () => {
        expect(getProductModel(containerProps.products.collection, 1))
          .toEqual(expectModel);
      });

      it('+++ должен вернуть пустой объект, если не найдена модель', () => {
        expect(getProductModel()).toEqual({});
      });
    });
  });
});