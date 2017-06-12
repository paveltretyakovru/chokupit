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
    menuItems: [],
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
    describe('>>> handleNavigate - функция навигации', () =>{
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
    }); // handleNavigate

    describe('>>> menuItems - массив с элементами меню', () => {
      let prop;

      beforeEach(() => {
        prop = component.prop('menuItems');
      });

      it('+++ должен быть определен', () => {
        expect(prop).toBeDefined();
      });

      it('+++ должен быть массивом', () => {
        expect(Array.isArray(prop)).toBeTruthy();
      });
    });
  }); // параметры
  
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
