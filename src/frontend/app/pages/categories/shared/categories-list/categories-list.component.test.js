// Core & libs
import React from 'react';
import {mount, shallow} from 'enzyme';

// Self components
import CategoriesListComponent from './categories-list.component';

// Material ui components
import {List} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

describe('>>> CategoriesListComponent. Компонент для листига категорий', () => {
  const props = {
    dataList: [],
    routeToCategory() {},
    onTouchItemHandler() {},
  }

  const wrapper = mount(
    <MuiThemeProvider>
      <CategoriesListComponent {...props} />
    </MuiThemeProvider>
  );

  const shallowWrapper = shallow(
    <CategoriesListComponent 
      {...props}
    />
  );
  const categoriesListComponent = wrapper.find(CategoriesListComponent);
  
  it('+++ должен быть определен и срендерен', () => {
    expect(categoriesListComponent).toBeDefined();
  });
  
  it('+++ должен содержать material-ui компонент - List', () => {
    expect(categoriesListComponent.find(List).length).toEqual(1);
  });
  
  describe('>>> Параметры компоненты', () => {
    
    describe('>>> параметр dataList', () => {
      const dataListProperty = categoriesListComponent.prop('dataList');

      it(('+++ должен быть передан в компонент'), () => {
        expect(dataListProperty).toBeDefined();
      })

      it(('+++ должен быть массиовм'), () => {
        expect(Array.isArray(dataListProperty)).toBeTruthy();
      });
    });

    describe('>>> параметр onTouchItemHandler', () => {
      const onTouchItemHandlerProperty =
        categoriesListComponent.prop('onTouchItemHandler');

      it('+++ должен быть передан', () => {
        expect(onTouchItemHandlerProperty).toBeDefined();
      });
    });

    describe('>>> параметр routeToCategory должен', () => {
      const routeToCategoryProperty =
        categoriesListComponent.prop('routeToCategory');

      it('+++ быть передан', () => {
        expect(routeToCategoryProperty).toBeDefined();
      });

      it('+++ быть функцией', () => {
        expect(typeof routeToCategoryProperty).toEqual('function');
      })
    });
  })

  describe('>>> Методы CategoriesListComponent', () => {
    const methods = shallowWrapper.instance();
    
    describe('>>> Метод prepareListItems()', () => {
      
      const prepareListItemsMethod = methods.prepareListItems.bind(methods);

      it('+++ должен быть определен', () => {
        expect(prepareListItemsMethod).toBeDefined();
      });

      it('+++ должен быть функцией', () => {
        expect(typeof prepareListItemsMethod).toEqual('function');
      });

      it('+++ должен вернуть массив', () => {
        expect(Array.isArray(prepareListItemsMethod())).toBeTruthy();
      });
    });
  });

});
  