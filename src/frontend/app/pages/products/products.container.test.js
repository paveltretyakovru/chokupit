import React from 'react';
import {mount} from 'enzyme';

// Material-UI
import {List} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import ConnectedProductContainer, {ProductsContainer} from './products.container';

injectTapEventPlugin();

describe('>>> PRODUCTS CONTAINER', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      products: {
        list: [],
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
    
    
});
