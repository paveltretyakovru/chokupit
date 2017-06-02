import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

// Components
import TextFieldComponent from 'app/shared/form/text-field.component';
import HeaderFlatButtonComponent from 'app/shared/buttons/header-flat-button.component';

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

  componentDidMount() {
    if(this.props.setHeaderButtonRight) {
      console.log('Component did mount');
      this.props.setHeaderButtonRight(
        <HeaderFlatButtonComponent
          label={PRODUCTS_ADD_BUTTON_LABEL}
          handleClick={ () => {
            if(this.refs.nameTextField.validate()) {
              this.props.productsActions.addProduct(
                this.refs.nameTextField.getValue()
              );
            }
          }}
        />
      );
    }
  }

  render() {
    return (
      <div id="products-add-wrapper">
        <TextFieldComponent
          ref="nameTextField"
          name="name"
          required={true}
          hintText="Наименование"
          fullWidth={true}
          errorValue="Это поле не может быть пустым"
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