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
  let wrapper;
  
  beforeEach(() => {
    const COMPONENT_PROPS = {
      list: [
        {
          id: 1,
          title: 'Hello title',
        },
      ],
    }

    wrapper = mount(
      <MuiThemeProvider>
        <ProductsListComponent {...COMPONENT_PROPS} />
      </MuiThemeProvider>
    );
  });

  it('+++ component should be rendered', () => {
    expect(wrapper.length).toBeDefined();      
  });

  it('+++ should have material-ui list component', () => {
    expect(wrapper.find(List).length).toEqual(1);
  });
  
  it('+++ should have "list" property with products list array', () => {
    expect(wrapper.find(ProductsListComponent).prop('list').length).toEqual(1);
  });
    
});