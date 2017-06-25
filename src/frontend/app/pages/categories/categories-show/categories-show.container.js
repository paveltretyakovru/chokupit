// Core && libs
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

// Constants
import {CATEGORIES_SHOW_ROUTE} from './categories-show.constants';

// Actions
import * as headerActions from 'app/shared/header/header.actions';
import * as categoriesShowActions from './categories-show.actions';
import {routeToProduct} from 'app/pages/products/products.actions';

// Writed components
import ProductsListComponent from 'app/pages/products/shared/products-list/products-list.component';

export class CategoriesShowContainer extends Component {
  static path = CATEGORIES_SHOW_ROUTE

  constructor(options) {
    super(options);

    let id = Number(options.params.id) || 0;
    let collection = options.categories.collection || [];

    // Достаем необходимую модель категории из коллекции
    this.model = this.getCategoryModel({ id, collection });
    
    // Достаем товары относящииеся к данной категории
    this.products = this.getCategoryProducts();
  }

  componentWillMount() {
    if(this.props.headerActions) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions.updateHeaderTitle(this.model.name || 'No name');
    }
  }

  render() {
    return(
      <div> 
        {/* Список покупок для текущей категории */}
        <ProductsListComponent
          products={this.products}
          routeToProduct={this.props.productsActions.routeToProduct}
        />
      </div>
    );
  }

  /**
   * 
   * @param {Object} opts Объект параметров функции
   * @param {Number} opts.id Идентификатор необходимой модели
   * @param {Object[]} opts.collection Коллекция моделей категорий
   * @param {Number} opts.collection[].id ID категории
   * @param {string} opts.collection[].name Наименование категории
   * 
   * @return {Object} Возращает объект модели категории
   */
  getCategoryModel(opts = {}) {
    const id = opts.id || 0;
    const collection = opts.collection || [];
    const model = collection.find(el => (el.id === id));

    return model || {};
  }

  /**
   * Вытаскивает товары данной категории
   */
  getCategoryProducts() {
    let allProducts = this.props.products.collection;

    return allProducts.filter(el => el.categories.indexOf(this.model.id) > -1);
  }
}

function mapStateToProps(state) {
  return {
    app: state.app, 
    products: state.products,
    categories: state.categories,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    headerActions: bindActionCreators(headerActions, dispatch),
    productsActions: bindActionCreators({ routeToProduct }, dispatch),
    categoriesShowActions: bindActionCreators(categoriesShowActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesShowContainer);