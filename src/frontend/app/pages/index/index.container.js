import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Material-ui components
import BooksIcon from 'material-ui/svg-icons/av/library-books';
import ContactsIcon from 'material-ui/svg-icons/communication/contacts';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite'; 
import AllInclusiveIcon from 'material-ui/svg-icons/places/all-inclusive';
import { List, ListItem } from 'material-ui/List';

// Actions
import * as AppActions from 'app/app.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

// Constants
import { DEFAULT_HEADER_TITILE } from 'app/app.constants';

// CSS
import './index.container.css';

export class IndexContainer extends Component {
  componentWillMount() {
    if(this.props.setHeaderButtons !== undefined) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions.updateHeaderTitle(`${DEFAULT_HEADER_TITILE}`);
    }
  }

  render() {
    const navigationLinks = [
      {
        primaryText: 'Всё',
        leftIcon: <AllInclusiveIcon />,
      },
      {
        primaryText: 'Друзья',
        leftIcon: <ContactsIcon />,
      },
      {
        primaryText: 'Категории',
        leftIcon: <BooksIcon />,
      },
      {
        primaryText: 'Избранное',
        leftIcon: <FavoriteIcon />,
      },
    ];

    return (
      <div>
        <h1>Добро пожаловать</h1>
        <div id="index-links-wrapper">
          <List>
            {
              navigationLinks.map((item, index) => {
                return <ListItem {...item} key={index} />;
              })
            }
          </List>
        </div>
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
    appActions: bindActionCreators(AppActions, dispatch),
    headerActions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
