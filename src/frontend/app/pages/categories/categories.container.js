// Core && Libs
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

// Self Components
import FloadAddButtonComponent from 'app/shared/buttons/float-add-button/float-add-button.component';
import CategoriesListComponent from './shared/categories-list/categories-list.component';

// Actions
import * as appActions from 'app/app.actions';
import * as headerActions from 'app/shared/header/header.actions';
import {routeToCategory} from './categories-show/categories-show.actions';
import {routeToAddCategory} from './categories-add/categories-add.actions';

// Constants
import {DEFAULT_HEADER_TITILE} from 'app/app.constants';
import {
  CATEGORIES_ROUTE,
  CATEGORIES_HEADER_TITLE,
} from './categories.constants';

export class CategoriesContainer extends Component {
  static path = CATEGORIES_ROUTE

  componentWillMount() {
    if(this.props.setHeaderButtons !== undefined) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions
        .updateHeaderTitle(`${DEFAULT_HEADER_TITILE}.${CATEGORIES_HEADER_TITLE}`);
    }
  }

  render() {
    const dataList = this.props.categories.collection || [];

    return (
      <div id="index-container-wrapper">
        <div id="index-links-wrapper">
          <CategoriesListComponent
            dataList={dataList}
            routeToCategory={
              this.props.routeToCategory || function() {
                console.error('routeToCategory action is undefined');
              }
            }
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
    routeToCategory: bindActionCreators(routeToCategory, dispatch),
    routeToAddCategory: bindActionCreators(routeToAddCategory, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
