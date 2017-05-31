import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Actions
import * as headerActions from 'app/shared/header/header.actions';
import * as productsActions from '../products.actions';

// Constants
import {
  PRODUCTS_ADD_TITLE,
} from './products-add.constants';

export class ProductsAddContainer extends Component {
  static path = '/products/add'

  componentWillMount() {
    if(this.props.headerActions) {
      this.props.headerActions
        .updateHeaderTitle(`${PRODUCTS_ADD_TITLE}`);
    }
  }

  render() {
    return (
      <div>
        Add products form container
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsAddContainer);