import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

// Material-ui components
import RaisedButton from 'material-ui/RaisedButton';

// Components
import TextFieldComponent from 'app/shared/form/text-field.component';

// Actions
import * as headerActions from 'app/shared/header/header.actions';
import * as productsActions from '../products.actions';

// Constants
import {
  PRODUCTS_ADD_TITLE,
  PRODUCTS_ADD_BUTTON_LABEL,
} from './products-add.constants';

// CSS
import './products-add.container.css';

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
      <div id="products-add-wrapper">
        <TextFieldComponent
          name="name"
          hintText="Наименование"
          fullWidth={true}
        />
        
        <RaisedButton
          label={PRODUCTS_ADD_BUTTON_LABEL}
          primary={true}
          onClick={() => {
            this.props.productsActions.addProduct('test');
          }}
          className="products-add-form-button"
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsAddContainer);