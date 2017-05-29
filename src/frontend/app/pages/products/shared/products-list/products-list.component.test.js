import React from 'react';
import {mount} from 'enzyme';

// Material-ui component
import { List } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import ProductsListComponent from './products-list.component';

describe('>>> PRODUCTS LIST COMPONENT', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(
      <MuiThemeProvider>
        <ProductsListComponent />
      </MuiThemeProvider>
    );
  });

  it('+++ component should be rendered', () => {
    expect(wrapper.length).toBeDefined();      
  });

  it('+++ should have material-ui list component', () => {
    expect(wrapper.find(List).length).toEqual(1);
  });
    

});