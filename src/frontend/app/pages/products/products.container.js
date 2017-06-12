import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

// Constants
import {PRODUCTS_TITLE, PRODUCTS_ROUTE} from './products.constants';

// Components
import ProductsListComponent from './shared/products-list/products-list.component';
import FloadAddButtonComponent from 'app/shared/buttons/float-add-button/float-add-button.component';

// Actions
import * as headerActions from 'app/shared/header/header.actions';
import * as productsActions from './products.actions';

// CSS
import './products.container.css';

export class ProductsContainer extends Component {
  static path = PRODUCTS_ROUTE

  componentWillMount() {
    if(this.props.headerActions) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions.updateHeaderTitle(PRODUCTS_TITLE);
    }
  }

  render() {
    let productsList = this.props.products.list || [];
    let handleRouteToProduct = this.props.productsActions.routeToProduct
      || function() { console.error('handleRouteToProduct not defined'); };
    let handleCLickAddProduct =  this.props.productsActions.routeToAddProduct
      || function() { console.error('handleClickAddProduct not defined'); };

    return(
      <div id="prodcuts-container-wrapper">
        <ProductsListComponent
          products={productsList}
          handleRouteToProduct={handleRouteToProduct}
        />
        <FloadAddButtonComponent
          handleClickAction={handleCLickAddProduct}
        />
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    products: state.products,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    headerActions: bindActionCreators(headerActions, dispatch),
    productsActions: bindActionCreators(productsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);