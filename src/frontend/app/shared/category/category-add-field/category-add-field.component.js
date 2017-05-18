import React, { Component } from 'react';

// Components
import TextFieldComponent from 'app/shared/form/text-field.component';

// Styles
import './category-add-field.component.css';

// Constants
const TEXT_FIELD_FLOAT_TEXT = 'Название категории';

export class CategoryAddFieldComponent extends Component {
  render() {
    return (
      <div id="category-add-field-wrapper" className="row">
        <div className="col-md-10">
          <TextFieldComponent floatingLabelText={ TEXT_FIELD_FLOAT_TEXT } />
        </div>
        <div className="col-md-2">
          <button>Добавить</button>
        </div>
      </div>
    );
  }
}

export default CategoryAddFieldComponent;