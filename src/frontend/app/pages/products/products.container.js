import { connect } from 'react-redux';
import React, { Component } from 'react';

export class ProductsContainer extends Component {
  static path = '/products'

  render() {
    return(
      <div>
        Hello products container
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  }
}

export default connect(mapStateToProps)(ProductsContainer);