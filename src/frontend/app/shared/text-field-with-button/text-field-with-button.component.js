// Core, libs, ...
import React, { Component } from 'react';

// Material-UI components
import FlatButton from 'material-ui/FlatButton';

// Components
import TextFieldComponent from 'app/shared/form/text-field.component';

// Styles
import './text-field-with-button.component.css';

// Constants
const TEXT_FIELD_HINT_TEXT = 'Название категории';
const ADD_BOUTTON_LABEL = 'Добавить';

export class TextFieldCOmponentWithButton extends Component {
  render() {
    return (
      <div id="category-add-field-wrapper" className="row">
        <div className="col-md-9 col-xs-9">
          <TextFieldComponent
            fullWidth={ true }
            hintText={ TEXT_FIELD_HINT_TEXT }
          />
        </div>
        <div className="col-md-2 col-xs-3">
          <FlatButton
            label={ADD_BOUTTON_LABEL}
            secondary={true}
          />
        </div>
      </div>
    );
  }
}

export default TextFieldCOmponentWithButton;