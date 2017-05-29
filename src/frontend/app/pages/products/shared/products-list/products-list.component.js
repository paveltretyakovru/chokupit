import React, {Component} from 'react';

// Material-ui component
import { List } from 'material-ui';

export class ProductsListComponent extends Component {
  render() {
    return(
      <div>
        Hello from products list component
        <List></List>
      </div>
    );
  }
}

export default ProductsListComponent;