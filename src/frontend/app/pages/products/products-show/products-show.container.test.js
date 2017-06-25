// Core && libs
import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';

// Material-ui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Self components
import ConnectedProductsShowContainer, { ProductsShowContainer } from './products-show.container';

// Constants
import { PRODUCTS_SHOW_ROUTE } from './products-show.constants';

// States
import { initState as app } from 'app/app.reducer';
import { initState as header } from 'app/shared/header/header.reducer';
import { initState as products } from '../products.reducer';

describe('ProductsShowContainer', () => {
  const state = { app, header, products }
  const mockStore = configureStore([thunk]);
  const store = mockStore(state);

  const props = {
    params: { id: 1 },
    setHeaderButtons(){},
  }

  const wrapperMount = mount(
    <MuiThemeProvider>
      <Provider store={store}>
        <ConnectedProductsShowContainer {...props} />
      </Provider>
    </MuiThemeProvider>
  );

  const wrapperShallow = shallow(<ProductsShowContainer {...props} {...state} />);

  it('+++ должен рендериться', () => {
    expect(wrapperMount).toBeDefined();
  });

  it('+++ должен содержать параметр path', () => {
    expect(ProductsShowContainer.path).toBeDefined();
  });
  
  it('+++ параметр path должен быть равен константе PRODUCTS_SHOW_ROUTE',() => {
    expect(ProductsShowContainer.path).toEqual(PRODUCTS_SHOW_ROUTE);
  });

  describe('>>> Методы контейнера', () => {
    const methods = wrapperShallow.instance();

    describe('>>> Метод getProductModel должен:', () => {
      const getProductModel = methods.getProductModel;

      it('+++ быть определен', () => {
        expect(getProductModel).toBeDefined();
      });

      it('+++ вернуть объект', () => {
        expect(typeof getProductModel(products.collection, 1))
          .toEqual('object');
      });

      it('+++ вернуть ожидаемый объект, при переданных параметрах', () => {
        expect(getProductModel(products.collection, 1))
          .toEqual(products.collection.find((element) => (element.id === 1)));
      });

      it('+++ вернуть пустой объект, если не найдена модель', () => {
        expect(getProductModel()).toEqual({});
      });
    });
  });
});