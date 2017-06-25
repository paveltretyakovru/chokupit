import React, {Component} from 'react';

// Material-ui component
import { List, ListItem } from 'material-ui';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// Style
import './products-list.component.css';

export class ProductsListComponent extends Component {
  render() {
    let products = this.props.products || [];

    // Prepare products list fro material-ui list component
    let preparedList = this.prepareProductsList(products)

    return(
      <div>
        <List className="materialui-list-wrapper">
          {preparedList}
        </List>
      </div>
    );
  }

  /**
   * Обработчик клика (тапа) по элементу списка товаров
   * @param {event} e стандартное событие клика
   * @param {Number} id идентификатор продукта для перехода на его страницу
   */
  handleClickOnItemText(e, id = 0) {
    
    // Сбрасываем пузыри событий, для корректной отработки клика по тексту ел-a
    e.stopPropagation();
    e.preventDefault();

    // Переходим на страницу продукта
    this.props.handleRouteToProduct(id);
  }

  /**
   * Подготовка списка для списка используя массив объектов товаров
   * @param {Array} products список товаров [{id: Number, name: String}, ...]
   */
  prepareProductsList(products = []) {
    return products.map((product, index) => {
      
      // Элемент-текст отображаемы в списке, создан как элемент для того, чтобы
      // перехватывать клик на сам текст, иначе срабатывает check на checkbox
      let primaryText = (
        <div
          onClick={event => this.handleClickOnItemText(event, product.id || 0)}
          onTouchTap={event => this.handleClickOnItemText(event, product.id || 0)}
        >
          {product.name}
        </div>
      );

      return (
        <ListItem
          key={product.id || index}
          primaryText={primaryText}
          leftCheckbox={<Checkbox />}
          rightIconButton={<IconButton><StarBorder /></IconButton>} 
        />
      );
    });
  }
}

export default ProductsListComponent;