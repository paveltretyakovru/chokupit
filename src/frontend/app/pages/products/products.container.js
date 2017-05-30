import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Constants
import { DEFAULT_HEADER_TITILE } from 'app/app.constants';

// Components
import ProductsListComponent from './shared/products-list/products-list.component';
import FloadAddButtonComponent from 'app/shared/buttons/float-add-button/float-add-button.component';

// Actions
import * as headerActions from 'app/shared/header/header.actions';

// CSS
import './products.container.css';

export class ProductsContainer extends Component {
  static path = '/products'

  componentWillMount() {
    if(this.props.headerActions) {
      this.props.headerActions.updateHeaderTitle(`${DEFAULT_HEADER_TITILE}. Все покупки`);
    }
  }

  render() {
    let productsList = this.props.products.list || [];
    let handleClickAction = () => {};

    return(
      <div id="prodcuts-container-wrapper">
        <ProductsListComponent products={productsList} />
        <FloadAddButtonComponent
          handleClickAction={handleClickAction}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);