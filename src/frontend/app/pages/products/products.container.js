import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Material-ui components
import { List, ListItem } from 'material-ui';

// Constants
import { DEFAULT_HEADER_TITILE } from 'app/app.constants';

// Actions
import * as headerActions from 'app/shared/header/header.actions';

export class ProductsContainer extends Component {
  static path = '/products'

  componentWillMount() {
    if(this.props.headerActions) {
      this.props.headerActions.updateHeaderTitle(`${DEFAULT_HEADER_TITILE}. Все покупки`);
    }
  }

  render() {
    let productsList = this.props.products.list.map((item, index) => {
      return (
        <ListItem
          key={item.id || index}
          primaryText={item.title}
        />
      );
    });

    return(
      <div>
        <List>
          {productsList}
        </List>
      </div>
    ); 
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    products: state.products,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    headerActions: bindActionCreators(headerActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);