// Core, libs, ...
import React, { Component } from 'react';

// Material-UI components
import FlatButton from 'material-ui/FlatButton';

// Components
import TextFieldComponent from 'app/shared/form/text-field.component';

// Styles
import './text-field-with-button.component.css';

// Constants
import {
  ADD_BUTTON_LABEL_DEFAULT,
  TEXT_FIELD_HINT_TEXT_DEFAULT,
} from './text-field-with-button.constants';

export class TextFieldCOmponentWithButton extends Component {
  render() {
    let hintText = this.props.hintText || TEXT_FIELD_HINT_TEXT_DEFAULT;
    let buttonLabel = this.props.buttonLabel || ADD_BUTTON_LABEL_DEFAULT;

    return (
      <div id="text-field-with-button-wrapper" className="row">
        <div className="col-md-8 col-xs-10">
          <TextFieldComponent
            fullWidth={ true }
            hintText={ hintText }
          />
        </div>
        <div className="col-md-4 col-xs-2">
          <FlatButton
            label={ buttonLabel }
            secondary={true}
          />
        </div>
      </div>
    );
  }
}

export default TextFieldCOmponentWithButton;