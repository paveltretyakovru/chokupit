// Core && libs
import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';

// Material-ui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Self components
import ProductsListComponent from 'app/pages/products/shared/products-list/products-list.component';
import ConnectedCategoriesShowContainer, { CategoriesShowContainer } from './categories-show.container';

// Constants
import { CATEGORIES_SHOW_ROUTE } from './categories-show.constants';

// States
import { initState as app } from 'app/app.reducer';
import { initState as header } from 'app/shared/header/header.reducer';
import { initState as products } from 'app/pages/products/products.reducer';
import { initState as categories } from 'app/pages/categories/categories.reducer';

describe('CategoriesShowContainer', () => {
  const model = categories.collection[0];
  const state = { app, header, categories, products }
  const mockStore = configureStore([thunk]);
  const collection = categories.collection;


  const props = {
    params: { id: 1 },
    setHeaderButtons(){},
  };

  const store = mockStore(state);
  
  const mountWrapper = mount(
    <MuiThemeProvider>
      <Provider store={store}>
        <ConnectedCategoriesShowContainer {...props} />
      </Provider>
    </MuiThemeProvider>
  );
  
  const shallowWrapper = shallow(
    <CategoriesShowContainer {...props} {...state} />
  );

  const container = mountWrapper.find(CategoriesShowContainer);

  it('+++ должен рендериться', () => {
    expect(mountWrapper).toBeDefined();
  });

  it('+++ должен содержать параметр path', () => {
    expect(CategoriesShowContainer.path).toBeDefined();
  });
  
  it('+++ параметр path должен быть равен CATEGORIES_SHOW_ROUTE', () => {
    expect(CategoriesShowContainer.path).toEqual(CATEGORIES_SHOW_ROUTE);
  });

  describe('>>> Передаваемые параметры', () => {
    const props = container.props();
    
    describe('>>> Параметр products должен...', () => {

      it('>>> быть определен', () => {
        expect(props.products).toBeDefined();
      });

    });
  });

  describe('>>> Методы контейнера', () => {
    const methods = shallowWrapper.instance();

    describe('>>> Метод getCategoryModel должен', () => {
      const getCategoryModel = methods.getCategoryModel;
      
      let defaultOpts = {
        collection,
        id: 0,
      };

      it('+++ быть определен', () => {
        expect(getCategoryModel).toBeDefined();
      });

      it('+++ вернуть объект', () => {
        expect(typeof getCategoryModel(defaultOpts)).toEqual('object');
      });

      it('+++ вернуть ожидаемый объект, при переданных параметрах', () => {
        expect(getCategoryModel(defaultOpts)).toEqual(model);
      });

      it('+++ вернуть пустой объект, если не найдена модель', () => {
        expect(getCategoryModel()).toEqual({});
      });
    }); // >>> Метод getCategoryModel должен

    describe('>>> Метод getCategoryProducts должен', () => {
      const getCategoryProducts = methods.getCategoryProducts.bind(methods);

      it('+++ быть определен', () => {
        expect(getCategoryProducts).toBeDefined();
      });

      it('+++ возвращать массив', () => {
        expect(Array.isArray(getCategoryProducts())).toBeTruthy();
      });

      it('+++ отфильтрованные товары должны входить в категорию', () => {
        const model = methods.getCategoryModel();
        const products = getCategoryProducts.call(methods);

        // Перебераем отфильтрованные продукты и проверям наличие id категории
        products.forEach((element) => {
          expect(element.categories.indexOf(model.id)).not.toBe(-1);
        });
      });
    }); // >>> Метод getCategoryProducts
  }); // >>> Методы контейнера

  describe('>>> Подключенные компоненты', () => {
    describe('>>> ProductsListComponent должен...', () => {
      const productsListComponent = mountWrapper
        .find(ProductsListComponent);

      it('+++ быть определен', () => {
        expect(productsListComponent).toBeDefined();
        expect(productsListComponent.length).toEqual(1);
      });

      describe('>>> Передаваемые параметры:', () => {
        describe('>>> Параметр products должен...', () => {
          const products = productsListComponent.prop('products');

          it('+++ быть определен', () => {
            expect(products).toBeDefined();
          });

          it('+++ быть массивом', () => {
            expect(Array.isArray(products)).toBeTruthy();
          });

        });
      });
    }); // >>> ProductsListComponent должен
  }); // >>> Подключенные компоненты
});