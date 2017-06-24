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

  constructor(options) {
    super(options);

    // Достаем необходимую модель категории из коллекции
    this.model = this.getCategoryModel({
      id: Number(options.params.id) || 0,
      collection: options.categories.collection || [],
    });
  }

  componentWillMount() {
    if(this.props.headerActions) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions.updateHeaderTitle(this.model.name || 'No name');
    }
  }

  render() {
    return(
      <div>
        <span className="display-1">#{this.model.id}</span>
      </div>
    );
  }

  /**
   * 
   * @param {Object} opts Объект параметров функции
   * @param {Number} opts.id Идентификатор необходимой модели
   * @param {Object[]} opts.collection Коллекция моделей категорий
   * @param {Number} opts.collection[].id ID категории
   * @param {string} opts.collection[].name Наименование категории
   */
  getCategoryModel(opts = {}) {
    const id = opts.id || 0;
    const collection = opts.collection || [];
    const model = collection.find(el => (el.id === id));

    return model || {};
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