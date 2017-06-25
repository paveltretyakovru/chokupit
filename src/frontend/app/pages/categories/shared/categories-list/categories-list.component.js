// Core && libs
import React, {Component} from 'react';

// Material-ui components
import {List, ListItem} from 'material-ui';

export class CategoriesListComponent extends Component {
  constructor(options) {
    super(options);

    this.listItems = this.prepareListItems(this.props.dataList || []); 
  }

  render() {
    return (
      <div>
        <List>
          {this.listItems}
        </List>
      </div>
    );
  }

  /**
   * Формирует масив с Material-ui ListItem компонентами на основе коллекции
   * моделей категорий передаваемой в параметр dataList
   * @param {Array} dataList коллекция моделей категорий
   */
  prepareListItems(dataList = []) {
    return dataList.map(
      (category, index) => {
        return(
          <ListItem
            key={`category-${category.id}` || `category-${index}`}
            primaryText={category.name}
            onTouchTap={e => this.handleOnTouchItem(e, category.id || 0)}
          />
        );
      }
    );
  }

  /**
   * Обработчик события тапа на элементы списка категорий
   * @param {event} e событие тапа
   * @param {Number} id идентификатор категории
   */
  handleOnTouchItem(e, id = 0) {
    // Сбрасываем пузыри событий, для корректной отработки клика по тексту ел-a
    e.preventDefault();
    e.stopPropagation();

    // /categoies/:id
    this.props.routeToCategory(id);
  }
}

export default CategoriesListComponent;