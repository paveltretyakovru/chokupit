import React from 'react';
import { mount } from 'enzyme';

// Material-UI
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import LeftMenuComponent from './left-menu.component';

injectTapEventPlugin();

describe('>>> LEFT-MENU CONTAINER --- Shallow Rendeer Container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MuiThemeProvider>
        <LeftMenuComponent />
      </MuiThemeProvider>
    );
  });
  
  it('+++ render the DUMP component', () => {
    expect(wrapper.length).toEqual(1);

  });

  it('+++ should have material-ui AppBar', () => {
    expect(wrapper.find(AppBar).length).toEqual(1);
  });
});
