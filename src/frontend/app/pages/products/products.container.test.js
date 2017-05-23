import React from 'react';
import { mount } from 'enzyme';

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import ConnectedProductContainer, { ProductsContainer } from './products.container';

injectTapEventPlugin();

describe('>>> PRODUCTS CONTAINER', () => {
  let wrapper, menuItems;

  beforeEach(() => {
    wrapper = mount(
      <MuiThemeProvider>
        <ProductsContainer
          items={ menuItems }
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
    
});
