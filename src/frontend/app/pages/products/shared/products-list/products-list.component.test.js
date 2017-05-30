import React from 'react';
import {mount} from 'enzyme';

// Material-ui component
import { List } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import ProductsListComponent from './products-list.component';

injectTapEventPlugin();

describe('>>> PRODUCTS LIST COMPONENT', () => {
  let wrapper, component;
  
  beforeEach(() => {
    const COMPONENT_PROPS = {products: [{ id: 1, title: 'Hello title'}]};

    wrapper = mount(
      <MuiThemeProvider>
        <ProductsListComponent {...COMPONENT_PROPS} />
      </MuiThemeProvider>
    );

    component = wrapper.find(ProductsListComponent);
  });

  it('+++ component should be rendered', () => {
    expect(wrapper.length).toBeDefined();      
  });

  it('+++ should have material-ui list component', () => {
    expect(wrapper.find(List).length).toEqual(1);
  });

  describe('>>> "products" property', () => {
    let property;

    beforeEach(() => {
      property = component.prop('products');
    });

    it('+++ should be defined', () => {
      expect(property).toBeDefined();
    });

    it('+++ should be array', () => {
      expect(Array.isArray(property)).toBeTruthy();
    });
  });
        
});