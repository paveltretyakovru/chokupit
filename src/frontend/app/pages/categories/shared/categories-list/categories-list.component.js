import React, {Component} from 'react';

// Material-ui components
import {List, ListItem} from 'material-ui';

export class CategoriesListComponent extends Component {
  render() {
    return (
      <div>
        Hello list
        <List>
          {/* Список категорий */}
        </List>
      </div>
    );
  }

  getListItems(dataList = []) {
    return dataList.map(
      (item, index) => {
        return(
          <ListItem
            key={`dinamic-${index}`}
            leftIcon={item.leftIcon}
            primaryText={item.name}

            onTouchTap={() => {
              this.props.appActions.routeTo(item.route);
            }}
          />
        );
      }
    );
  }
}

export default CategoriesListComponent;