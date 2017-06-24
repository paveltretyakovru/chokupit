// Core && libs
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

// Constants
import {CATEGORIES_SHOW_ROUTE} from './categories-show.constants';

// Actions
import * as headerActions from 'app/shared/header/header.actions';
import * as categoriesShowActions from './categories-show.actions';

export class CategoriesShowContainer extends Component {
  static path = CATEGORIES_SHOW_ROUTE

  componentWillMount() {
    if(this.props.headerActions) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions.updateHeaderTitle('Category');
    }
  }

  render() {
    let id = +this.props.params.id || 0;
    let collection = this.props.categories.collection || [];
    
    let model = this.getCategoryModel(collection, id);

    return(
      <div>
        <span className="display-1">{model.name}</span>
      </div>
    );
  }

  getCategoryModel(collection = [], id = 0) {
    let model = collection.find((element) => {
      return element.id === id;
    });

    return model ? model : {};
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
    headerActions: bindActionCreators(headerActions, dispatch),
    categoriesShowActions: bindActionCreators(categoriesShowActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesShowContainer);