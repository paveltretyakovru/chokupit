// Core & libs
import React from 'react';
import {mount} from 'enzyme';

// Self components
import CategoriesListComponent from './categories-list.component';

// Material ui components
import {List} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

describe('>>> CategoriesListComponent. Компонент для листига категорий', () => {
  let wrapper, component;

  const componentProperties = {
    dataList: [],
  }

  beforeEach(() => {
    wrapper = mount(
      <MuiThemeProvider>
        <CategoriesListComponent {...componentProperties} />
      </MuiThemeProvider>
    );

    component = wrapper.find(CategoriesListComponent);
  });
  
  it('+++ должен быть определен и срендерен', () => {
    expect(component).toBeDefined();
  });
  
  it('+++ должен содержать material-ui компонент - List', () => {
    expect(component.find(List).length).toEqual(1);
  });
  
  describe('>>> параметр dataList', () => {
    let property;

    beforeEach(() => {
      property = component.prop('dataList');
    });

    it(('+++ должен быть передан в компонент'), () => {
      expect(property).toBeDefined();
    })

    it(('+++ должен быть массиовм'), () => {
      expect(Array.isArray(property)).toBeTruthy();
    });
  });
});
  