import React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Material-UI component
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Components
import TextFieldComponent from 'app/shared/form/text-field.component';
import CategoryAddFieldComponent from './category-add-field.component';

injectTapEventPlugin();

describe('>>> CATEGORY ADD FIELD COMPONENT - shallow render component', () => {
  let component;

  beforeEach(() => {
    component = mount(
      <MuiThemeProvider>
        <CategoryAddFieldComponent />
      </MuiThemeProvider>
    );
  });

  it('+++ render the DUMB component', () => {
    expect(component.length).toEqual(1);
  });

  it('+++ should have TextFieldComponent', () => {
    expect(component.find(TextFieldComponent).length).toEqual(1);
  });
  
  it('+++ should have add button', () => {
    expect(component.find(FlatButton).length).toEqual(1);
  });
});
  