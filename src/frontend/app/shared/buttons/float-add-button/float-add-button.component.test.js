import React from 'react';
import {mount} from 'enzyme';

// Material-ui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import FloatAddButtonComponent from './float-add-button.component';

injectTapEventPlugin();

describe('>>> FLOAT BUTTON COMPONENT', () => {
  let wrapper, component;

  beforeEach(() => {
    wrapper = mount(
      <MuiThemeProvider>
        <FloatAddButtonComponent />
      </MuiThemeProvider>
    );

    component = wrapper.find(FloatAddButtonComponent);
  });

  it('+++ should be defined', () => {
    expect(component).toBeDefined();
  });

});
  