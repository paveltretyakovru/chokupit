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

  prepareListItems(dataList = []) {
    return dataList.map(
      (item, index) => {
        return(
          <ListItem
            key={index}
            primaryText={item.name}
            onTouchTap={() => this.onTouchTapListItem(item)}
          />
        );
      }
    );
  }

  onTouchTapListItem(item) {
    console.log('onTouchTapListItem event', item);
  }
}

export default CategoriesListComponent;