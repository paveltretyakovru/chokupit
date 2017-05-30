import React, {Component} from 'react';

// Material-ui component
import { List, ListItem } from 'material-ui';

// Style
import './products-list.component.css';

export class ProductsListComponent extends Component {
  render() {
    let products = this.props.products || [];
    let preparedList = products.map((product, index) => {
      return (
        <ListItem
          key={product.id || index}
          primaryText={product.title}
        />
      );
    });

    return(
      <div>
        <List className="materialui-list-wrapper">
          {preparedList}
        </List>
      </div>
    );
  }
}

export default ProductsListComponent;