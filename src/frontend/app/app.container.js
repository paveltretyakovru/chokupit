// Core imports
import {connect} from 'react-redux';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {bindActionCreators} from 'redux';

// Material-ui
// import LinearProgress from 'material-ui/LinearProgress';

// Components
import DevTools from './shared/devtools';
import HeaderContainer from './shared/header/header.container';
import LeftMenuComponent from './shared/left-menu/left-menu.component';
import ButtonMenuComponent from './shared/buttons/button-menu.component';

// Constants
import { DEFAULT_HEADER_TITILE } from './app.constants';

// Redux
import * as appActions from './app.actions';
import { routeToContacts } from './pages/contacts/contacts.actions';

// Actions
import { routeTo } from './app.actions';

// Routes
import {
  INDEX_ROUTE,
  ALL_PRODUCTS_ROUTE,
  CONTACTS_ROUTE,
  CATEGORIES_ROUTE,
} from 'routes';

// Styles
import './app.container.css';
import './shared/styles/tipography.less';

injectTapEventPlugin();

export class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerButtonLeft: null,
      headerButtonRight: null,
    }
  }

  render() {
    const LEFT_MENU_IMTES = [
      {label: 'Главная', route: INDEX_ROUTE},
      {label: 'Товары', route: ALL_PRODUCTS_ROUTE},
      {label: 'Категории', route: CATEGORIES_ROUTE},
      
      {label: 'Контакты', route: CONTACTS_ROUTE},
    ];

    return(
        <div id="app-container">
          <HeaderContainer
            buttonLeft={this.state.headerButtonLeft}
            buttonRight={this.state.headerButtonRight}
          />

          <LeftMenuComponent
              title={DEFAULT_HEADER_TITILE}
              isOpen={this.props.app.isLeftMenuOpen}
              menuItems={LEFT_MENU_IMTES}
              handleSwitch={this.props.appActions.switchLeftMenu}
              handleNavigate={this.props.routeActions.routeTo}
            />

          <div className="container-fluid">

            <main className="row">
              <div id="app-content" className="col-xs-12 col-md-12">
                {
                  (this.props.children)
                    ? React.cloneElement(
                      this.props.children,
                      {
                        setHeaderButtons: ::this.setHeaderButtons,
                        setHeaderButtonLeft: ::this.setHeaderButtonLeft,
                        setHeaderButtonRight: ::this.setHeaderButtonRight,
                      }
                    )
                    : null
                }
              </div>
            </main>
            </div>

            {/* Redux DevTools */}
            { NODE_ENV === 'development' ? <DevTools /> : null }

        </div>
    );
  }

  setHeaderButtons(headerButtonLeft, headerButtonRight) {
    let leftButton = headerButtonLeft 
      ? headerButtonLeft
      : <ButtonMenuComponent
          handleCLick={ this.props.appActions.switchLeftMenu }
      />;

    this.setState({
      ...this.state,
      headerButtonLeft: leftButton,
      headerButtonRight: headerButtonRight,
    });
  }

  setHeaderButtonLeft(button, callback = () => {}) {
    this.setState({ ...this.state, headerButtonLeft: button }, callback);
  }

  setHeaderButtonRight(button, callback = () => {}) {
    this.setState({ ...this.state, headerButtonRight: button }, callback);
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  }
}

function mapDisptachToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch),
    routeActions: bindActionCreators({routeToContacts, routeTo}, dispatch),
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(AppContainer);
