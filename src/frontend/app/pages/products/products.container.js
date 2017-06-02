import { connect } from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

// Constants
import {ALL_PRODUCTS_TITLE} from './products.constants';

// Components
import ProductsListComponent from './shared/products-list/products-list.component';
import FloadAddButtonComponent from 'app/shared/buttons/float-add-button/float-add-button.component';

// Actions
import * as headerActions from 'app/shared/header/header.actions';
import * as productsActions from './products.actions';

// CSS
import './products.container.css';

export class ProductsContainer extends Component {
  static path = '/products'

  componentWillMount() {
    if(this.props.headerActions) {
      this.props.setHeaderButtonRight(null);
      this.props.headerActions.updateHeaderTitle(ALL_PRODUCTS_TITLE);
    }
  }

  render() {
    let productsList = this.props.products.list || [];
    let handleCLickAddProduct =  this.props.productsActions.routeToAddProduct
      || function() { console.error('handleClickAddProduct function not defined'); };

    return(
      <div id="prodcuts-container-wrapper">
        <ProductsListComponent products={productsList} />
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