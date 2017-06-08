import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

// Material-ui components
import AllInclusiveIcon from 'material-ui/svg-icons/places/all-inclusive';

// Self Components
import FloadAddButtonComponent from 'app/shared/buttons/float-add-button/float-add-button.component';
import CategoriesListComponent from './shared/categories-list/categories-list.component';

// Actions
import * as appActions from 'app/app.actions';
import * as headerActions from 'app/shared/header/header.actions';
import {routeToAddCategory} from './categories-add/categories-add.actions';

// Constants
import {PRODUCTS_ROUTE} from 'app/pages/products/products.constants';
import {DEFAULT_HEADER_TITILE} from 'app/app.constants';

import {CATEGORIES_ROUTE} from './categories.constants';

export class CategoriesContainer extends Component {
  static path = CATEGORIES_ROUTE

  componentWillMount() {
    if(this.props.setHeaderButtons !== undefined) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions.updateHeaderTitle(`${DEFAULT_HEADER_TITILE}`);
    }
  }

  render() {
    return (
      <div id="index-container-wrapper">
        <div id="index-links-wrapper">
          <CategoriesListComponent
            dataList={[]}
          />
        </div>

        <FloadAddButtonComponent
          handleClickAction={this.props.routeToAddCategory || function(){
            console.error('Undefined routeToAddCategory function');
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    mainAuthor: state.mainAuthor,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
    headerActions: bindActionCreators(headerActions, dispatch),
    routeToAddCategory: bindActionCreators(routeToAddCategory, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
