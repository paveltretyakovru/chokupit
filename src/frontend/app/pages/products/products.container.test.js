import React from 'react';
import {mount} from 'enzyme';

// Material-UI
import {List} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import FloatAddButtonComponent from 'app/shared/buttons/float-add-button/float-add-button.component';
import ConnectedProductContainer, {ProductsContainer} from './products.container';
import ProductsListComponent from './shared/products-list/products-list.component';

// Actions
import {
  routeToAddProduct,
} from './products.actions';

injectTapEventPlugin();

describe('>>> PRODUCTS CONTAINER', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      products: {
        list: [],
      },
      productsActions: {
        routeToAddProduct: routeToAddProduct,
      },
    };

    wrapper = mount(
      <MuiThemeProvider>
        <ProductsContainer
          {...props}
        />
      </MuiThemeProvider>
    );
  });

  it('+++ should render the container', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ should have static "path" property', () => {
    expect(ProductsContainer.path).toBeDefined();
  });

  it('+++ "path" property should be equal "/products"', () => {
    expect(ProductsContainer.path).toEqual('/products');
  });

  it('+++ should have material-ui list', () => {
    expect(wrapper.find(List).length).toEqual(1);
  });

  describe('>>> productsActions property', () => {
    let property;

    beforeEach(() => {
      property = wrapper.find(ProductsContainer).prop('productsActions');
    });

    it('+++ should be defined', () => {
      expect(property).toBeDefined();
    });
      
  });

  describe('>>> ProductsListComponent', () => {
    let component;

    beforeEach(() => {
      component = wrapper.find(ProductsListComponent);
    });

    it('+++ should have ProductsListComponent', () => {
      expect(component.length).toEqual(1);
    });

    describe('>>>> "products" property', () => {
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

  describe('>>> FloatButtonAddComponent', () => {
    let button;

    beforeEach(() => {
      button = wrapper.find(FloatAddButtonComponent);
    });
    
    it('+++ should be defined', () => {
      expect(button).toBeDefined();
      expect(button.length).toEqual(1);
    });

    describe('>>> handleCLickAction property', () => {
      let property; 

      beforeEach(() => {
        property = button.prop('handleClickAction');
      });

      it('+++ should be defined', () => {
        expect(property).toBeDefined();
      });

      it('+++ should be a function', () => {
        expect(typeof property).toEqual('function');
      });

    });

  });

});
