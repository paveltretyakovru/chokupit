import React from 'react';
import { mount } from 'enzyme';

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import {ProductsAddContainer} from './products-add.container';
import TextFieldComponent from 'app/shared/form/text-field.component';

// Constants
import {
  ADD_PRODUCT_ROUTE,
} from '../products.constants';

injectTapEventPlugin();

describe('>>> PRODUCTS ADD CONTAINER', () => {
  let wrapper;

  beforeEach(() => {
    const COMPONENT_PROPS = {}

    wrapper = mount(
      <MuiThemeProvider>
        <ProductsAddContainer {...COMPONENT_PROPS} />
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
    
  describe('>>> Title TextField', () => {
    let textField;

    beforeEach(() => {
      textField = wrapper.find(TextFieldComponent);
    });
    
    it('+++ should be defined', () => {
      expect(textField).toBeDefined();
    });
      
  });
    
});
