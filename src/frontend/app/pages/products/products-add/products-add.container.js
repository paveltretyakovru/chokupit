import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

// Material-ui components
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

// Components
import TextFieldComponent from 'app/shared/form/text-field.component';
import HeaderFlatButtonComponent from 'app/shared/buttons/header-flat-button.component';

// Actions
import * as appActions from 'app/app.actions';
import * as headerActions from 'app/shared/header/header.actions';
import * as productsActions from '../products.actions';

// Constants
import {
  PRODUCTS_ADD_TITLE,
  PRODUCTS_ADD_BUTTON_LABEL,
  PRODUCTS_ADD_CATEGORIES_LABEL,
} from './products-add.constants';

// CSS
import './products-add.container.css';

export class ProductsAddContainer extends Component {
  static path = '/products/add'

  componentWillMount() {
    if(this.props.headerActions) {
      this.props.headerActions.updateHeaderTitle(PRODUCTS_ADD_TITLE);
    }
  }

  componentDidMount() {
    if(this.props.setHeaderButtonRight) {
      this.props.setHeaderButtonRight(
        <HeaderFlatButtonComponent
          label={PRODUCTS_ADD_BUTTON_LABEL}
          handleClick={::this.handleClickSaveButton}
        />
      );
    }
  }

  render() {

    let categoriesCollection = this.props.categories.collection || [];
    let categoriesMenuItems = this.getCategoriesListItems(categoriesCollection);

    return (
      <div id="products-add-wrapper">
        
        {/* Поля ввода наименования товара */}
        <TextFieldComponent
          ref="nameTextField"
          name="name"
          required={true}
          hintText="Наименование"
          fullWidth={true}
          errorValue="Это поле не может быть пустым"
        />

        {/* Поле для выбора категории товара */}
        <SelectField
          value={1}
          fullWidth={true}
          floatingLabelText={PRODUCTS_ADD_CATEGORIES_LABEL}
        >
          <MenuItem value={1} primaryText="Без категории" />

          {/* Подготовленный  список товаров */}
          {categoriesMenuItems}

        </SelectField>
      </div>
    );
  }

  handleClickSaveButton() {
    if(this.refs.nameTextField.validate()) {
      let name = this.refs.nameTextField.getValue();
      this.props.productsActions.addProduct(name);
      this.props.appActions.routeToBack();
    }
  }

  /**
   * Формирует массив элементов выпадающего списка с категориями
   * @param {Array} collection Массив с коллекцией категорией
   * @return {Array} Массив с MenuItem компонентами
   */
  getCategoriesListItems(collection = []) {
    return collection.map((item) => {
      return(
        <MenuItem
          key={item.id}
          primaryText={item.name}
        />
      );
    }); 
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
    appActions: bindActionCreators(appActions, dispatch),
    headerActions: bindActionCreators(headerActions, dispatch),
    productsActions: bindActionCreators(productsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsAddContainer);