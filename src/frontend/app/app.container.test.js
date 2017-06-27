// Core && libs
import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

// Material-ui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// States
import {initState as app} from './app.reducer';
import {initState as header} from './shared/header/header.reducer';
import {initState as categories} from 'app/pages/categories/categories.reducer';

// Components
import ConnectedAppContainer, { AppContainer } from './app.container';
import LeftMenuCompnent from './shared/left-menu/left-menu.component';

describe('>>> AppContainer контейнер', () => {
  const initialState = {
    app: app,
    header: header,
    categories: categories,
  };
  const mockSotre = configureStore();

  const store = mockSotre(initialState);
  const wrapper = mount(
    <MuiThemeProvider>
      <Provider store={store}>
        <ConnectedAppContainer />
      </Provider>
    </MuiThemeProvider>
  );

  const component = wrapper.find(AppContainer);

  it('+++ должен быть срендерен', () => {
    expect(wrapper).toBeDefined();
  });

  describe('>>> AppContainer. Параметры состояния', () => {
    it('+++ categories. Должен быть передан state категорий', () => {
      expect(component.prop('categories')).toBeDefined();
    });
  });

  // Вложенные компоненты
  describe('>>> вложенные компоненты', () => {

    // Вложенная компонента LeftMenuComponent
    describe('>>> LeftMenuCompnent - компонента для левого меню', () => {
      const leftMenu = wrapper.find(LeftMenuCompnent);

      it('+++ должна быть определена', () => {
        expect(leftMenu.length).toEqual(1);
      });

      // Параметр handleNaviagate
      describe('>>> параметр handleNavigate', () => {
        let property = leftMenu.prop('handleNavigate');

        it('+++ должен быть определен', () => {
          expect(property).toBeDefined();
        });

        it('+++ должен быть функцией', () => {
          expect(typeof property).toEqual('function');
        });

      }); // Параметр handleNavigate

      describe('>>> параметр dinamicItems', () => {
        const dinamicItems = leftMenu.prop('dinamicItems');

        it('+++ должен быть определен', () => {
          expect(dinamicItems).toBeDefined();
        });

        it('+++ должен быть массивом', () => {
          expect(Array.isArray(dinamicItems)).toBeTruthy();
        });
      });
    }); // LeftMenuComponent
  }); // Вложенные компоненты 
    
});
  