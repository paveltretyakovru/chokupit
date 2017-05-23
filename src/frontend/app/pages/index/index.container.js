import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Actions
import * as AppActions from 'app/app.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

// Constants
import { DEFAULT_HEADER_TITILE } from 'app/app.constants';

export class IndexContainer extends Component {
  componentWillMount() {
    if(this.props.setHeaderButtons !== undefined) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions.updateHeaderTitle(`${DEFAULT_HEADER_TITILE}`);
    }
  }

  render() {
    return (
      <div>
        <h1>Главная страница</h1>
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
