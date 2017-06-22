import React, {Component} from 'react';

// Material-ui components
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const DEFAULT_LABEL_TEXT = 'Выберите категорию';
const DEFAULT_COLLECTION = [
  {
    id: 0,
    name: 'Без категории',
  },
];

export class SelectFieldComponent extends Component {
  render() {
    const FULL_WIDTH = this.props.fullWidth || true;
    const LABEL_TEXT = this.props.floatingLabelText || DEFAULT_LABEL_TEXT;

    let items = this.getListItems(this.props.collection || DEFAULT_COLLECTION);
    let value = this.props.value || 0;

    return(
      <div>
        <SelectField
          value={value}
          fullWidth={FULL_WIDTH}
          floatingLabelText={LABEL_TEXT}
        >
          {/* Menu items */}
          {items}
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
          value={item.id}
          primaryText={item.name}
        />
      );
    });
  }
}

export default SelectFieldComponent;