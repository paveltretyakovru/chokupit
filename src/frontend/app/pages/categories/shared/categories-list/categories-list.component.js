// Core && libs
import React, {Component} from 'react';

// Material-ui components
import {List, ListItem} from 'material-ui';

export class CategoriesListComponent extends Component {
  render() {
    let listItems = this.prepareListItems(this.props.dataList || []);

    return (
      <div>
        <List>
          {listItems}
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
    let routeToCategory;

    // Достаем функцию клика на категорию
    try {
      routeToCategory = this.props.routeToCategory;
    } catch(error) {
      routeToCategory = function() {
        console.error('routeToCategory is not defined with msg', error.message);
      }
    }

    return dataList.map(
      (item, index) => {
        return(
          <ListItem
            key={index}
            primaryText={item.name}
            onTouchTap={() => routeToCategory(item.id)}
          />
        );
      }
    );
  }
}

export default CategoriesListComponent;