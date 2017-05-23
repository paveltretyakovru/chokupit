import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Components
import ButtonBackComponent from 'app/shared/buttons/button-back.component';

// Actions
import * as HeaderActions from 'app/shared/header/header.actions';

// Constants
import { DEFAULT_HEADER_TITILE } from 'app/app.constants';

class ContactsContainer extends Component {
  static path = '/contacts'

  componentWillMount() {
    this.props.setHeaderButtons(null, <ButtonBackComponent />);
    this.props.headerActions
      .updateHeaderTitle(`${DEFAULT_HEADER_TITILE}. Контакты`);
  }

  render() {
    return <div>Contacts Page</div>;
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    headerActions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
