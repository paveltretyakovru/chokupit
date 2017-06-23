import React, {Component} from 'react';

// Material-ui components
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const DEFAULT_HINT_TEXT = 'Выберите категорию';
const DEFAULT_LABEL_TEXT = 'Выбранные категории';
const DEFAULT_COLLECTION = [{id: 0, name: 'Без категории'}];

export class SelectFieldComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: this.props.values || [],
    };
  }

  /**
   * Метод для обработки измнении значения выпадающего списка
   */
  handleChange = (event, index, values) => this.setState({values});

  render() {
    const HINT_TEXT = this.props.hintText || DEFAULT_HINT_TEXT;
    const FULL_WIDTH = this.props.fullWidth || true;
    const LABEL_TEXT = this.props.floatingLabelText || DEFAULT_LABEL_TEXT;

    return(
      <div>
        <SelectField
          value={this.state.values}
          onChange={this.handleChange}
          hintText={HINT_TEXT}
          fullWidth={FULL_WIDTH}
          floatingLabelText={LABEL_TEXT}
        >

          {/* Menu items */}
          {this.getListItems(this.props.collection || DEFAULT_COLLECTION)}

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

    // Исключаем из списка "Все товары"
    let filterCollection = collection.filter(item => item.id !== 0);

    return filterCollection.map((item) => {
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