import React, {Component} from 'react';

// Material-ui component
import { List, ListItem } from 'material-ui';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// Style
import './products-list.component.css';

export class ProductsListComponent extends Component {
  render() {
    let products = this.props.products || [];

    // Prepare products list fro material-ui list component
    let preparedList = products.map((product, index) => {
      let primaryText = (
        <div onClick={::this.handleClickOnItemText}>
          {product.name}
        </div>
      );
      
      return (
        <ListItem
          key={product.id || index}
          primaryText={primaryText}
          leftCheckbox={<Checkbox />}
          rightIconButton={<IconButton><StarBorder /></IconButton>} 
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

  handleClickOnItemText(e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('Test click');
  }
}

export default ProductsListComponent;