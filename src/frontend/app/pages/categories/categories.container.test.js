import React from 'react';
import thunk from 'redux-thunk';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

// Material-ui components
import { List } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// States
import {initState as initAppReducerState} from 'app/app.reducer';
import {initState as initHeaderReducerState} from 'app/shared/header/header.reducer';
import {initState as initCategoriesReducerState} from 'app/pages/categories/categories.reducer';

// Self Component
import ConnectedCategoriesContainer, {CategoriesContainer} from './categories.container';
import FloatAddButtonComponent from 'app/shared/buttons/float-add-button/float-add-button.component';
import CategoriesListComponent from './shared/categories-list/categories-list.component';

injectTapEventPlugin();

describe('>>> Контейнер Categories', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  
  const initialState = {
    app: {...initAppReducerState},
    header: {...initHeaderReducerState},
    categories: {...initCategoriesReducerState},
  }

  const store = mockStore(initialState);    
  
  const wrapper = mount(
    <MuiThemeProvider>
      <Provider store={store}>
        <ConnectedCategoriesContainer store={store} />
      </Provider>
    </MuiThemeProvider>
  );

  const categoriesContainer = wrapper.find(CategoriesContainer);

  it('+++ должен быть срендерен', () => {
    expect(categoriesContainer.length).toEqual(1);
  });

  it('+++ должен содержать компонент - list, material-ui библиотеки', () => {
    expect(categoriesContainer.find(List).length).toEqual(1);
  });
  
  describe('>>> Параметр контейнера "categories"', () => {
    let categoriesProperty;

    beforeEach(() => {
      categoriesProperty = categoriesContainer.prop('categories');
    });
    
    it('+++ должен быть определен', () => {
      expect(categoriesProperty).toBeDefined();
    });
    
    it('+++ должен быть объектом', () => {
      expect(typeof categoriesProperty).toEqual('object');
    });
    
    describe('>>> Параметр контейнера list', () => {
      
      it('+++ должен быть определен', () => {
        expect(categoriesProperty.collection).toBeDefined();
      });
      
      it('+++ должен быть массивом', () => {
        expect(Array.isArray(categoriesProperty.collection)).toBeTruthy();
      });
        
        
    });
      
  });

  describe('>>> Компонент CategorisListComponent', () => {
    const categoriesListComponent = categoriesContainer.find(CategoriesListComponent);

    it('+++ должен быть подключён к контейнеру', () => {
      expect(categoriesListComponent.length).toEqual(1);
    });

    describe('>>> CategoriesListComponent параметры', () => {
      describe('>>> Параметр dataList', () => {
        const dataListProperty = categoriesListComponent.prop('dataList');      

        it('+++ должен быть определен', () => {
          expect(dataListProperty).toBeDefined();
        });

        it('+++ должен быть массивом', () => {
          expect(Array.isArray(dataListProperty)).toBeTruthy();
        });
      }); // >>> Параметр dataList

      describe('>>> Параметр routeToCategory должен', () => {
        const routeToCategoryProperty =
          categoriesListComponent.prop('routeToCategory');

        it('+++ быть определен', () => {
          expect(routeToCategoryProperty).toBeDefined();
        });

        it('+++ быть функцией', () => {
          expect(typeof routeToCategoryProperty).toEqual('function');
        });
      });
    }); // >>> CategoriesListComponent параметры
  });
  
  describe('>>> "Летающая" кнопка добавить', () => {
    const floatAddButton = wrapper.find(FloatAddButtonComponent);
    
    it('+++ должна быть подключена к контейнеру', () => {
      expect(floatAddButton.length).toEqual(1);
    });
    
    describe('>>> handleClickAction параметр контенера', () => {
      const property = floatAddButton.prop('handleClickAction');

      it('+++ должен быть определен в контейнере', () => {
        expect(property).toBeDefined();
      });
      
      it('+++ должен быть функцией', () => {
        expect(typeof property).toEqual('function');
      });
        
    });
      
  });
    
});