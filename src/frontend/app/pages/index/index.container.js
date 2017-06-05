import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Actions
import * as appActions from 'app/app.actions';
import * as headerActions from 'app/shared/header/header.actions';

// Constants
import {
  DEFAULT_HEADER_TITILE,
} from 'app/app.constants';

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

    return (
      <div id="index-container-wrapper">
        <h1>Hello</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
