// Core && libs
import React from 'react';
import {mount} from 'enzyme';

// Self components
import {ProductsShowContainer} from './products-show.container';

// Constants
import {PRODUCTS_SHOW_ROUTE} from './products-show.constants';

describe('ProductsShowContainer', () => {
  let wrapper;

  const containerProps = {
    params: {
      id: 1,
    },
  }

  beforeEach(() => {
    wrapper = mount(<ProductsShowContainer {...containerProps} />);
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
});