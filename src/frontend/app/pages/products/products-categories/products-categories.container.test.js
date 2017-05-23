import React from 'react';
import { mount } from 'enzyme';

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import ProductsCategoriesContainer from './products-categories.container';

injectTapEventPlugin();

describe('>>> CATEGORIES CONTAINER --- Shallow Rendeer Container', () => {
  let wrapper, menuItems;

  beforeEach(() => {
    menuItems = [
      {
        title: 'Contacts',
        routeDispatch: () => {},
      },
    ];

    wrapper = mount(
      <MuiThemeProvider>
        <ProductsCategoriesContainer
          items={ menuItems }
        />
      </MuiThemeProvider>
    );
  });

  it('+++ should render the container', () => {
    expect(wrapper.length).toEqual(1);
  });
});
