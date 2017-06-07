import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

// Components
import TextFieldComponent from 'app/shared/form/text-field.component';
import HeaderFlatButtonComponent from 'app/shared/buttons/header-flat-button.component';

// Actions
import * as appActions from 'app/app.actions';
import * as headerActions from 'app/shared/header/header.actions';
import * as categoriesActions from '../categories.actions';

// Constants
import {
  CATEGORIES_ADD_ROUTE,
  CATEGORIES_ADD_TITLE,
  CATEGORIES_ADD_BUTTON_LABEL,
} from './categories-add.constants';

// CSS
import './categories-add.container.css';

export class CategoriesAddContainer extends Component {
  static path = CATEGORIES_ADD_ROUTE

  componentWillMount() {
    if(this.props.headerActions) {
      this.props.headerActions
        .updateHeaderTitle(`${CATEGORIES_ADD_TITLE}`);
    }
  }

  componentDidMount() {
    if(this.props.setHeaderButtonRight) {
      this.props.setHeaderButtonRight(
        <HeaderFlatButtonComponent
          label={CATEGORIES_ADD_BUTTON_LABEL}
          handleClick={::this.handleClickSaveButton}
        />
      );
    }
  }

  render() {
    return (
      <div id="categories-add-wrapper">
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

  handleClickSaveButton() {
    if(this.refs.nameTextField.validate()) {
      let name = this.refs.nameTextField.getValue();
      
      // Call add category action
      this.props.categoriesActions.addCategory({name: name});
      
      // Return back on history
      this.props.appActions.routeToBack();
    }
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    categories: state.categories,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
    headerActions: bindActionCreators(headerActions, dispatch),
    categoriesActions: bindActionCreators(categoriesActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesAddContainer);