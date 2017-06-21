// Core && libs
import React from 'react';
import {mount, shallow} from 'enzyme';

// Material-ui components
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'; 

// Component
import SelectFieldComponent from './select-field.component';

injectTapEventPlugin();

describe('>>> Компонента SelectFieldComponent', () => {
  let wrapper;

  const PROPS = {}

  it('+++ должен быть определен', () => {
    expect(SelectFieldComponent).toBeDefined();
  });

  describe('>>> Полное (mount) монтирование', () => {

    beforeEach(() => {
      wrapper = mount(
        <MuiThemeProvider>
          <SelectFieldComponent {...PROPS} />
        </MuiThemeProvider>
      );
    });

    it('+++ должен быть срендерен', () => {
      expect(wrapper).toBeDefined();
    });

    describe('>>> дочерний SelectField компонент', () => {
      let selectField;

      beforeEach(() => {
        selectField = wrapper.find(SelectField);
      });

      it('+++ должен быть в компоненте', () => {
        expect(selectField.length).toEqual(1);
      });
    });

  });

  describe('>>> Частичное (shallow) монтирование ', () => {

    beforeEach(() => {
      wrapper = shallow(<SelectFieldComponent {...PROPS} />);
    });

    it('+++ должен срендериться', () => {
      expect(wrapper).toBeDefined();
    });

  });
})