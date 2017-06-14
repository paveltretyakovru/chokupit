// Core && libs
import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

// Material-ui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// States
import {initState as initAppReducerState} from './app.reducer';
import {initState as initHeaderReducerState} from './shared/header/header.reducer';

// Components
import ConnectedAppContainer from './app.container';
import LeftMenuCompnent from './shared/left-menu/left-menu.component';

describe('>>> AppContainer контейнер', () => {
  const initialState = {
    app: {...initAppReducerState},
    header: {...initHeaderReducerState},
  };
  const mockSotre = configureStore();
  
  let wrapper, store;

  beforeEach(() => {
    store = mockSotre(initialState);
    wrapper = mount(
      <MuiThemeProvider>
        <Provider store={store}>
          <ConnectedAppContainer />
        </Provider>
      </MuiThemeProvider>
    );
  });
  
  it('+++ должен быть срендерен', () => {
    expect(wrapper).toBeDefined();
  });

  // Вложенные компоненты
  describe('>>> вложенные компоненты', () => {

    // Вложенная компонента LeftMenuComponent
    describe('>>> LeftMenuCompnent - компонента для левого меню', () => {
      let leftMenu;

      beforeEach(() => {
        leftMenu = wrapper.find(LeftMenuCompnent);
      });

      it('+++ должна быть определена', () => {
        expect(leftMenu.length).toEqual(1);
      });

      // Параметр handleNaviagate
      describe('>>> параметр handleNavigate', () => {
        let property;

        beforeEach(() => {
          property = leftMenu.prop('handleNavigate');
        })

        it('+++ должен быть определен', () => {
          expect(property).toBeDefined();
        });

        it('+++ должен быть функцией', () => {
          expect(typeof property).toEqual('function');
        });

      }); // Параметр handleNavigate

      // Параметр menuItems
      describe('>>> параметр menuItems', () => {
        let property;

        beforeEach(() => {
          property = leftMenu.prop('menuItems');
        })

        it('+++ должен быть определен', () => {
          expect(property).toBeDefined();
        });

        it('+++ должен быть массивом', () => {
          expect(Array.isArray(property)).toBeTruthy();
        });

      }); // Параметр menuItems
    }); // LeftMenuComponent
  }); // Вложенные компоненты 
    
});
  