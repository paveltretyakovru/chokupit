import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import * as AppActions from 'app/app.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

class IndexContainer extends Component {
  componentWillMount() {
    this.props.setHeaderButtons(null, null);
    this.props.headerActions.updateHeaderTitle('React application');
  }

  render() {
    return <div>Index Component</div>
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
    headerActions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
