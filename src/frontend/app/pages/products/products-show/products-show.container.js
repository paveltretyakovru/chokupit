// Core && libs
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

// Constants
import {PRODUCTS_SHOW_ROUTE} from './products-show.constants';

// Actions
import * as headerActions from 'app/shared/header/header.actions';
import * as productsShowActions from './products-show.actions';

export class ProductsShowContainer extends Component {
  static path = PRODUCTS_SHOW_ROUTE

  componentWillMount() {
    if(this.props.headerActions) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions.updateHeaderTitle('Product');
    }
  }

  render() {
    return(
      <div>Show container for Product #{this.props.params.id}</div>
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
    productsShowActions: bindActionCreators(productsShowActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsShowContainer);