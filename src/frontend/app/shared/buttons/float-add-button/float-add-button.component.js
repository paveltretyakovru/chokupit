import React, { Component } from 'react';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';

class FloatAddButton extends Component {
  render() {
    return(
      <div className="float-button">
          <FloatingActionButton
            // mini={true}
            onClick={() => {this.props.handleAction()}}
            secondary={true}
            className="animated zoomIn"
          >
            <ContentAdd className="animated rotateIn" />
          </FloatingActionButton>
        </div>
    );
  }
}

export default FloatAddButton;