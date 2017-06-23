// Core && libs
import React from 'react';
import thunk from 'redux-thunk';
import {mount, shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

// Material-UI
import SelectField from 'material-ui/SelectField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'; 

// States
import {initState as initAppReducerState} from 'app/app.reducer';
import {initState as initHeaderReducerState} from 'app/shared/header/header.reducer';
import {initState as initCategoriesReducerState} from 'app/pages/categories/categories.reducer';

// Components
import ConnectedProductsAddContainer, {ProductsAddContainer} from './products-add.container';
import TextFieldComponent from 'app/shared/form/text-field.component';
import SelectFieldComponent from 'app/shared/form/select-field/select-field.component';

// Constants
import {
  PRODUCTS_ADD_ROUTE,
  PRODUCTS_ADD_CATEGORIES_LABEL,
} from './products-add.constants';

injectTapEventPlugin();

describe('>>> PRODUCTS ADD CONTAINER', () => {
  let wrapper, store;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    app: {...initAppReducerState},
    header: {...initHeaderReducerState},
    categories: {...initCategoriesReducerState},
  }

  beforeEach(() => {
    store = mockStore(initialState);    
    wrapper = mount(
      <MuiThemeProvider>
        <Provider store={store}>
          <ConnectedProductsAddContainer store={store} />
        </Provider>
      </MuiThemeProvider>
    );
  });

  it('+++ should render the container', () => {
    expect(wrapper).toBeDefined();
  });

  it('+++ should have static "path" member', () => {
    expect(ProductsAddContainer.path).toBeDefined();
  });
  
  it('+++ "path" static member should be equal PRODUCTS_ADD_ROUTE const', () => {
    expect(ProductsAddContainer.path).toEqual(PRODUCTS_ADD_ROUTE);
  });
  
  describe('>>> Параметры контейнера', () => {
    let container;

    beforeEach(() => {
      container = wrapper.find(ProductsAddContainer);
    });
    
    describe('>>> Параметр categories', () => {
      let property;

      beforeEach(() => {
        property = container.prop('categories');
      });

      it('+++ должен быть определен', () => {
        expect(property).toBeDefined();
      });

      it('+++ должен содердать коллекцию категорий', () => {
        expect(property.collection).toBeDefined();
      });

      it('+++ collection должен быть массивом', () => {
        expect(Array.isArray(property.collection)).toBeTruthy();
      });

    });
      
  });
    
  describe('>>> Элементы формы', () => {
    describe('>>> Title TextField', () => {
      let textField;

      beforeEach(() => {
        textField = wrapper.find(TextFieldComponent);
      });
      
      it('+++ should be defined', () => {
        expect(textField).toBeDefined();
      });
        
    });

    describe('>>> Select Field Component. Список с категориями', () => {
      let selectFieldComponent;

      beforeEach(() => {
        selectFieldComponent = wrapper.find(SelectFieldComponent);
      });

      it('+++ должен быть определен', () => {
        expect(selectFieldComponent).toBeDefined();
      });

      it('+++ должен быть включен в контейнер страницы', () => {
        expect(selectFieldComponent.length).toEqual(1);
      });

      describe('+++ передаваемые параметры', () => {
        
        describe('+++ collection параметр', () => {
          let property;

          beforeEach(() => {
            property = selectFieldComponent.prop('collection');
          });

          it('+++ должен быть определен', () => {
            expect(property).toBeDefined();
          });

          it('+++ должен быть массивом', () => {
            expect(Array.isArray(property)).toBeTruthy();
          });
        });

        describe('+++ hintText параметр', () => {
          let property;

          beforeEach(() => {
            property = selectFieldComponent.prop('hintText');
          });

          it('+++ должен быть определен', () => {
            expect(property).toBeDefined();
          });

          it('+++ должен взят из PRODUCTS_ADD_CATEGORIES_LABEL', () => {
            expect(property).toEqual(PRODUCTS_ADD_CATEGORIES_LABEL);
          });
        });

      });
    });
  });
  
  describe('>>> ProductsAddContainer Class', () => {
    let wrapperShallow;

    beforeEach(() => {
      wrapperShallow = shallow(<ProductsAddContainer {...initialState} />);
    });

    it('+++ должен быть срендерен', () => {
      expect(wrapperShallow).toBeDefined();
    });
  });
});
