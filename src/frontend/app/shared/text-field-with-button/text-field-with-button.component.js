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
} from './';

export class TextFieldCOmponentWithButton extends Component {
  render() {
    let hintText = this.props.hintText || TEXT_FIELD_HINT_TEXT_DEFAULT;
    let buttonLabel = this.props.buttonLabel || ADD_BUTTON_LABEL_DEFAULT;

    return (
      <div id="category-add-field-wrapper" className="row">
        <div className="col-md-9 col-xs-9">
          <TextFieldComponent
            fullWidth={ true }
            hintText={ hintText }
          />
        </div>
        <div className="col-md-2 col-xs-3">
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