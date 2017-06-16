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
    categories: initCategoriesReducerState,
  }

  beforeEach(() => {
    store = mockStore(initialState);    
    wrapper = mount(
      <MuiThemeProvider>
        <Provider store={store}>
          <ConnectedProductsAddContainer />
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

    describe('>>> Select Field. Список с категориями', () => {
      let selectField;

      beforeEach(() => {
        selectField = wrapper.find(SelectField);
      });

      it('+++ должен быть определен в контейнере', () => {
        expect(selectField.length).toEqual(1);
      });

      it('+++ должен содержать поля MenuItem', () => {
        expect(selectField.findWhere(
          (node) => {
            /**
             * Пока не нашёл универсальней способа найти MenuItem
             * в отрендереном SelectField компоненте
             */
            try {
              return node.text() === 'Без категории';
            } catch (error) {
              return false;
            }
          }
        ).length).toBeGreaterThan(0);
      });

      describe('>>> параметры поля', () => {
        
        describe('>>> параметр floatingLabelText', () => {
          let property;

          beforeEach(() => {
            property = selectField.prop('floatingLabelText');
          });

          it('+++ должен быть определен', () => {
            expect(property).toBeDefined();
          });
          
          it('+++ должен быть равен PRODUCTS_ADD_CATEGORIES_LABEL', () => {
            expect(property).toEqual(PRODUCTS_ADD_CATEGORIES_LABEL);
          });
            
        });

        describe('>>> параметр value', () => {
          let valueProperty;

          beforeEach(() => {
            valueProperty = selectField.prop('value');
          });

          it('+++ Должен быть определен', () => {
            expect(valueProperty).toBeDefined();
          });

          it('+++ должен быть равен 1', () => {
            expect(valueProperty).toEqual(1);
          });
        });

      });
    });
  });
  
  describe('>>> ProductsAddContainer Class', () => {
    let wrapperShallow;

    beforeEach(() => {
      wrapperShallow = shallow(<ProductsAddContainer />);
    });

    it('+++ должен быть срендерен', () => {
      expect(wrapperShallow).toBeDefined();
    });
    
    describe('>>> методы класса', () => {
      let methods;

      beforeEach(() => {
        methods = wrapperShallow.instance();
      });
    });
  });
});
