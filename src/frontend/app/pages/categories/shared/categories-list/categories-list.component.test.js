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
  let wrapper, component, shallowComponent;

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
    shallowComponent = shallow(<CategoriesListComponent />);
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

  describe('>>> Метод prepareListItems()', () => {
    let method;

    beforeEach(() => {
      method = shallowComponent.instance().prepareListItems;
    });

    it('+++ должен быть определен', () => {
      expect(method).toBeDefined();
    });

    it('+++ должен быть функцией', () => {
      expect(typeof method).toEqual('function');
    });

    it('+++ должен вернуть массив', () => {
      expect(Array.isArray(method())).toBeTruthy();
    });
  });
});
  