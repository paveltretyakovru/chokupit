import React, {Component} from 'react';

// Material-ui components
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const DEFAULT_LABEL_TEXT = 'Выберите категорию';

export class SelectFieldComponent extends Component {
  render() {
    const FULL_WIDTH = this.props.fullWidth || true;
    const LABEL_TEXT = this.props.floatingLabelText || DEFAULT_LABEL_TEXT;

    return(
      <div>
        <SelectField
          fullWidth={FULL_WIDTH}
          floatingLabelText={LABEL_TEXT}
        >
          {/* Menu items */}
        </SelectField>
      </div>
    );
  }

  /**
   * Формирует массив элементов выпадающего списка
   * @param {Array} collection Массив с коллекцией моделей
   * @return {Array} Массив с MenuItem компонентами
   */
  getListItems(collection = []) {
    return collection.map((item) => {
      return(
        <MenuItem
          key={item.id}
          primaryText={item.name}
        />
      );
    });
  }
}

export default SelectFieldComponent;