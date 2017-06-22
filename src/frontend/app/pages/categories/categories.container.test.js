import React from 'react';
import {mount} from 'enzyme';
import { CategoriesContainer } from './categories.container';

// Material-ui components
import { List } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Self Component
import FloatAddButtonComponent from 'app/shared/buttons/float-add-button/float-add-button.component';
import CategoriesListComponent from './shared/categories-list/categories-list.component';

injectTapEventPlugin();

describe('>>> Контейнер Categories', () => {
  let wrapper, container;

  const properties = {
    categories:{
      collection: [
        {
          id: 1,
          name: 'Hello',
        },
      ],
    },
  }

  beforeEach(()=>{
    wrapper = mount(
      <MuiThemeProvider>
        <CategoriesContainer {...properties} />
      </MuiThemeProvider>
    );

    container = wrapper.find(CategoriesContainer);
  })

  it('+++ должен быть срендерен', () => {
    expect(container.length).toEqual(1);
  });

  it('+++ должен содержать компонент - list, material-ui библиотеки', () => {
    expect(container.find(List).length).toEqual(1);
  });
  
  describe('>>> Параметр контейнера "categories"', () => {
    let categoriesProperty;

    beforeEach(() => {
      categoriesProperty = container.prop('categories');
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
    let component;

    beforeEach(() => {
      component = container.find(CategoriesListComponent);
    });

    it('+++ должен быть подключён к контейнеру', () => {
      expect(component.length).toEqual(1);
    });

    describe('>>> Параметр dataList', () => {
      let property;

      beforeEach(() => {
        property = component.prop('dataList');
      });

      it('+++ должен быть определен', () => {
        expect(property).toBeDefined();
      });

      it('+++ должен быть массивом', () => {
        expect(Array.isArray(property)).toBeTruthy();
      });
    });
  });
  
  describe('>>> "Летающая" кнопка добавить', () => {
    let button;
    
    beforeEach(() => {
      button = wrapper.find(FloatAddButtonComponent);
    });
    
    it('+++ должна быть подключена к контейнеру', () => {
      expect(button.length).toEqual(1);
    });
    
    describe('>>> handleClickAction параметр контенера', () => {
      let property;

      beforeEach(() => {
        property = button.prop('handleClickAction');
      });

      it('+++ должен быть определен в контейнере', () => {
        expect(property).toBeDefined();
      });
      
      it('+++ должен быть функцией', () => {
        expect(typeof property).toEqual('function');
      });
        
    });
      
  });
    
});