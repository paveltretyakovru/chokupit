import React from 'react';
import { mount } from 'enzyme';

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import ConnectedProductsAddContainer, {ProductsAddContainer} from './products-add.container';

// Constants
import {
  ADD_PRODUCT_ROUTE,
} from '../products.constants';

injectTapEventPlugin();

describe('>>> PRODUCTS ADD CONTAINER --- Shallow Rendeer Container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MuiThemeProvider>
        <ProductsAddContainer />
      </MuiThemeProvider>
    );
  });

  it('+++ should render the container', () => {
    expect(wrapper.length).toEqual(1);
  });
  
  it('+++ should have static "path" property', () => {
    expect(ProductsAddContainer.path).toBeDefined();
  });
  
  it('+++ "path" static property should be equal ADD_PRODUCT_ROUTE const', () => {
    expect(ProductsAddContainer.path).toEqual(ADD_PRODUCT_ROUTE);
  });

});
