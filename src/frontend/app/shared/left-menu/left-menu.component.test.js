import React from 'react';
import { mount, shallow } from 'enzyme';

// Material-UI
import {List} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import {ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import LeftMenuComponent from './left-menu.component';

injectTapEventPlugin();

describe('>>> LEFT-MENU CONTAINER --- Shallow Rendeer Container', () => {

  // Prepare variables for working
  const PROPS = {
    menuItems: [],
    handleNavigate: () => {},
  };

  // Массив с демо элементами пункта меню
  const INPUT_MENU_ITEMS = [
    {
      route: '/',
      label: 'Главная',
    },
    {
      route: '/categories',
      label: 'Категории',
    }
  ];

  const wrapper = mount(
    <MuiThemeProvider>
      <LeftMenuComponent
        {...PROPS}
      />
    </MuiThemeProvider>
  );

  const component = wrapper.find(LeftMenuComponent);
  const wrapperShallow = shallow(<LeftMenuComponent {...PROPS} />);
  const methods = wrapperShallow.instance();

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

  describe('>>> LeftMenuComponent. Методы ', () => {
    describe('>>> LeftMenuComponent. Методы. PrepareMenuItems', () => {
      let method, completedResult;

      beforeEach(() => {
        method = methods.prepareMenuItems;
        completedResult = method(INPUT_MENU_ITEMS);
      });

      it('+++ должен быть определен', () => {
        expect(method).toBeDefined();
      });

      it('+++ должен возвращать массив', () => {
        expect(Array.isArray(method())).toBeTruthy();
      });

      it('+++ количество элементов столько же сколько и на входе',() => {
        expect(completedResult.length).toEqual(INPUT_MENU_ITEMS.length);
      });

      // it('+++ пункт меню должен быть обернут в ListItem компоненту', () => {
      //   let inst = shallow(completedResult[0]).instance();
      //   expect(inst).instanceOf(ListItem);
      // });
    });
  });
    
});
