// Core && libs
import React, {Component} from 'react';

// Constants
import {PRODUCTS_SHOW_ROUTE} from './products-show.constants';

export class ProductsShowContainer extends Component {
  static path = PRODUCTS_SHOW_ROUTE

  render() {
    return(
      <div>Products show container</div>
    );
  }
}