import React from 'react';
import {mount, shallow} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

// Material-ui component
import { List, ListItem } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import ProductsListComponent from './products-list.component';

injectTapEventPlugin();

describe('>>> PRODUCTS LIST COMPONENT', () => {
  let wrapper, component, wrapperShallow;
  
  const COMPONENT_PROPS = {
    products: [
      { id: 1, title: 'Hello title'},
    ],

    handleClickOnItemText: () => {},
  };  

  beforeEach(() => {
    wrapper = mount(
      <MuiThemeProvider>
        <ProductsListComponent {...COMPONENT_PROPS} />
      </MuiThemeProvider>
    );

    component = wrapper.find(ProductsListComponent);
    wrapperShallow = shallow(<ProductsListComponent {...COMPONENT_PROPS} />);
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

  describe('>>> Методы компонента', () => {
    let methods;

    beforeEach(() => {
      methods = wrapperShallow.instance();
    });

    describe('>>> Метод handleClickOnItemText', () => {
      let handleClickOnItemText;

      beforeEach(() => {
        handleClickOnItemText = methods.handleClickOnItemText;
      });
        
      it('+++ должен быть определен', () => {
        expect(handleClickOnItemText).toBeDefined();
      });
    });

    describe('>>> Метод prepareProductsList', () => {
      let prepareProductsList;

      beforeEach(() => {
        prepareProductsList = methods.prepareProductsList;
      });

      it('+++ должен быть определен', () => {
        expect(prepareProductsList).toBeDefined();
      });

      it('+++ должен вернуть массив', () => {
        expect(Array.isArray(prepareProductsList())).toBeTruthy();
      });

      it('+++ элемент массива должен быть типа ListItem - material-ui', () => {
        let result = prepareProductsList(COMPONENT_PROPS.products);

        expect(ReactTestUtils.isElementOfType(result[0], ListItem)).toBeTruthy();
      });
    });
  });
        
});