import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Material-ui components
import AllInclusiveIcon from 'material-ui/svg-icons/places/all-inclusive';
import { List, ListItem } from 'material-ui/List';

// Components
import FloadAddButtonComponent from 'app/shared/buttons/float-add-button/float-add-button.component';

// Actions
import * as appActions from 'app/app.actions';
import * as headerActions from 'app/shared/header/header.actions';

// Constants
import {PRODUCTS_ROUTE} from 'app/pages/products/products.constants';
import {DEFAULT_HEADER_TITILE} from 'app/app.constants';

import {CATEGORIES_ROUTE} from './categories.constants';

export class CategoriesContainer extends Component {
  static path = CATEGORIES_ROUTE

  componentWillMount() {
    if(this.props.setHeaderButtons !== undefined) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions.updateHeaderTitle(`${DEFAULT_HEADER_TITILE}`);
    }
  }

  render() {
    const navigationLinks = [
      {
        route: PRODUCTS_ROUTE,
        primaryText: 'Всё',
        leftIcon: <AllInclusiveIcon />,
      },
    ];

    return (
      <div id="index-container-wrapper">
        <div id="index-links-wrapper">
          <List>
            {
              navigationLinks.map((item, index) => {
                return(
                  <ListItem
                    key={index}
                    leftIcon={item.leftIcon}
                    primaryText={item.primaryText}

                    onClick={() => {
                      this.props.appActions.routeTo(item.route);
                    }}
                  />
                );
              })
            }
          </List>
        </div>

        <FloadAddButtonComponent />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mainAuthor: state.mainAuthor,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
    headerActions: bindActionCreators(headerActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
