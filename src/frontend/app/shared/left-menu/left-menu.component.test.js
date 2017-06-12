import React from 'react';
import { mount } from 'enzyme';

// Material-UI
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {List} from 'material-ui/List';

// Components
import LeftMenuComponent from './left-menu.component';

injectTapEventPlugin();

describe('>>> LEFT-MENU CONTAINER --- Shallow Rendeer Container', () => {
  let wrapper, component;

  const MENU_COMPONENT_PROPERTIES = {
    handleNavigate: () => {},
  };

  beforeEach(() => {
    wrapper = mount(
      <MuiThemeProvider>
        <LeftMenuComponent
          {...MENU_COMPONENT_PROPERTIES}
        />
      </MuiThemeProvider>
    );

    component = wrapper.find(LeftMenuComponent);
  });

  describe('>>> параметры', () => {
    describe('>>> handleNavigate', () =>{
      let prop;

      beforeEach(() => {
        prop = component.prop('handleNavigate');
      });

      it('+++ должен быть определен', () => {
        expect(prop).toBeDefined();
      });

      it('+++ должен быть функцией', () => {
        expect(typeof prop).toEqual('function');
      });

    })
  });
  
  it('+++ render the DUMP component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ should have material-ui AppBar', () => {
    expect(wrapper.find(AppBar).length).toEqual(1);
  });
  
  it('+++ should have material-ui List component', () => {
    expect(wrapper.find(List).length).toEqual(1);
  });
    
});
