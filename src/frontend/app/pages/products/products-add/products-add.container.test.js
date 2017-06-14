// Core && libs
import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import	thunk	from	'redux-thunk';

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// States
import {initState as initAppReducerState} from 'app/app.reducer';
import {initState as initHeaderReducerState} from 'app/shared/header/header.reducer';

// Components
import ConnectedProductsAddContainer, {ProductsAddContainer} from './products-add.container';
import TextFieldComponent from 'app/shared/form/text-field.component';

// Constants
import {
  PRODUCTS_ADD_ROUTE,
} from './products-add.constants';

injectTapEventPlugin();

describe('>>> PRODUCTS ADD CONTAINER', () => {
  let wrapper, store;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    app: {...initAppReducerState},
    header: {...initHeaderReducerState},
  }
  const PROPS = {
    headerActions: {
      updateHeaderTitle: () => {},
    },
  }

  beforeEach(() => {
    store = mockStore(initialState);    
    wrapper = mount(
      <MuiThemeProvider>
        <Provider store={store}>
          <ConnectedProductsAddContainer {...PROPS}>
            <ProductsAddContainer {...PROPS} />
          </ConnectedProductsAddContainer>
        </Provider>
      </MuiThemeProvider>
    );
  });

  it('+++ should render the container', () => {
    expect(wrapper).toBeDefined();
  });

  it('+++ should have static "path" property', () => {
    expect(ProductsAddContainer.path).toBeDefined();
  });
  
  it('+++ "path" static property should be equal PRODUCTS_ADD_ROUTE const', () => {
    expect(ProductsAddContainer.path).toEqual(PRODUCTS_ADD_ROUTE);
  });
    
  describe('>>> Title TextField', () => {
    let textField;

    beforeEach(() => {
      textField = wrapper.find(TextFieldComponent);
    });
    
    it('+++ should be defined', () => {
      expect(textField).toBeDefined();
    });
      
  });
    
});
