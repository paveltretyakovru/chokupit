import React, {Component} from 'react';

// Material-ui component
import { List, ListItem } from 'material-ui';

export class ProductsListComponent extends Component {
  render() {
    const list = this.props.list || [];
    
    const preparedList = list.map((item, index) => {
      return (
        <ListItem
          key={item.id || index}
          primaryText={item.title}
        />
      );
    });

    return(
      <div>
        Hello from products list component
        <List>
          {preparedList}
        </List>
      </div>
    );
  }
}

export default ProductsListComponent;