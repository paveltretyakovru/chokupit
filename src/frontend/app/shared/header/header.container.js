import {connect} from 'react-redux';
import React, {Component} from 'react';

// Material-ui components
import AppBar from 'material-ui/AppBar';

// TODO: Вывести отдельный reducer и actions для header

class HeaderContainer extends Component {
  render() {
    const headerTitle = this.props.headerTitle || 'Default titile';

    return (
      <header>
        <AppBar
          title={ headerTitle }
          iconElementLeft={ this.props.buttonLeft }
          iconElementRight={ this.props.buttonRight }
        />
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    headerTitle: state.header.headerTitle,
  }
}

export default connect(mapStateToProps)(HeaderContainer);
