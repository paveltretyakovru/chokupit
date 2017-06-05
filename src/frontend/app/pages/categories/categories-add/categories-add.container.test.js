import React from 'react';
import { mount } from 'enzyme';

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import {CategoriesAddContainer} from './categories-add.container';
import TextFieldComponent from 'app/shared/form/text-field.component';

// Constants
import {
  ADD_CATEGORIES_ROUTE,
} from '../categories.constants';

injectTapEventPlugin();

describe('>>> CATEGORIES ADD CONTAINER', () => {
  let wrapper;

  beforeEach(() => {
    const COMPONENT_PROPS = {}

    wrapper = mount(
      <MuiThemeProvider>
        <CategoriesAddContainer {...COMPONENT_PROPS} />
      </MuiThemeProvider>
    );
  });

  it('+++ should render the container', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ should have static "path" property', () => {
    expect(CategoriesAddContainer.path).toBeDefined();
  });
  
  it('+++ "path" static property should be equal ADD_CATEGORIES_ROUTE const', () => {
    expect(CategoriesAddContainer.path).toEqual(ADD_CATEGORIES_ROUTE);
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
