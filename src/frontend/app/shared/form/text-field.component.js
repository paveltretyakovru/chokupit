import TextField from 'material-ui/TextField';
import React, { Component } from 'react';

import makeId from 'makeId';

// Параметры которые присутсвуют в компоненте Material-UI TextField
const MATERIAL_UI_TEXT_FIELD_PROPERTIES = [
  'underlineStyle', 'value',
  'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle',
  'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow',
  'children', 'className', 'defaultValue', 'disabled', 'errorStyle',
  'floatingLabelShrinkStyle', 'floatingLabelStyle', 'floatingLabelText',
  'fullWidth', 'hintStyle', 'hintText', 'id', 'inputStyle', 'multiLine',
  'name', 'onChange', 'rows', 'rowsMax', 'style', 'textareaStyle', 'type'
];

/**
 * @class TextFieldComponent
 * @param props.floatingLabelText [String]
 */
class TextFieldComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      errorText: '',
    }
  }

  render() {
    let textFieldProps = {};

    Object.keys(this.props).map(key => {
      if(MATERIAL_UI_TEXT_FIELD_PROPERTIES.includes(key)){
        textFieldProps[key] = this.props[key];
      }
    });

    return(
      <TextField
        { ...textFieldProps }

        value = { this.state.value }
        errorText = {(() => {
          return !this.state.errorText
            ? ''
            : this.state.errorText;
        })()}

        onBlur = { this.handleCheckValid }
        onChange = {
          (event, newValue) =>
          this.handleChangeInput(newValue)
        }
      />
    );
  }

  // ============================ Handlers ====================================
  handleChangeInput(newValue) {
    this.setState({...this.state, value: newValue });
    
    if(this.props.onChangeHandle) {
      this.props.onChangeHandle(this.props.name, newValue);
    }
  }

  // ============ Update state values methods =================================
  setErrorValue(value = '') {
    this.setState({
      ...this.state,
      errorText: value,
    });
  }

  // ================ Additional methods for example a call from parents ======
  getValue() {
    return this.state.value;
  }

  setRandomValue(count = 20) {
    this.handleChangeInput(makeId(count));
  }

  // Simple validation
  validate() {
    if(this.props.required && this.state.value === '') {
      this.setErrorValue(this.props.errorValue || 'This field required');
      return false;
    } else {
      this.setErrorValue();
      return true;
    }    
  }
}

export default TextFieldComponent;