import React, {Component} from 'react';

// Material-ui components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

// Routes path constants
import { INDEX_ROUTE } from 'app/pages/index/index.constants';
import { PRODUCTS_ROUTE } from 'app/pages/products/products.constants';
import { CONTACTS_ROUTE } from 'app/pages/contacts/contacts.constants';
import { CATEGORIES_ROUTE } from 'app/pages/categories/categories.constants';

const MENU_ITEMS = [
  {label: 'Главная', route: INDEX_ROUTE},
  {label: 'Товары', route: PRODUCTS_ROUTE},
  {label: 'Категории', route: CATEGORIES_ROUTE},
  {label: 'Контакты', route: CONTACTS_ROUTE},
];

class LeftMenuComponent extends Component {
  render() {
    let title = this.props.title || 'Menu title';
    let menuItems = MENU_ITEMS || [{label: 'Home', route: '/'}];

    return(
      <Drawer
        open={this.props.isOpen}
        docked={false}
        onRequestChange={this.props.handleSwitch}
      >
        <AppBar title={ title } showMenuIconButton={false} />
        <List>
          {
            menuItems.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  onTouchTap={() => {
                    this.props.handleNavigate(item.route);
                    this.props.handleSwitch();
                  }}
                  primaryText={item.label}
                />
              );
            })
          }
        </List>
      </Drawer>
    )
  }

  handleClickMenuItem(itemData) {
    itemData.routeDispatch();
    this.props.handleSwitch();
  }
  
  /**
   * Подготовка пунктов меню из массива collection
   * 
   * @param {Array} [collection=[]] Масив с пунктами меню
   * @param {Object} [collection[]] Модель-объект пункта меню
   * @param {string} [collection[].route] Маршрут переадресации
   * @param {string} [collection[].label] Текст пункта меню
   * @returns {Array} новый массив с элементами именю
   * @memberof LeftMenuComponent
   */
  prepareMenuItems(collection = []) {
    return collection.map((element) => {
      return(
        <ListItem
          primaryText={element.label}
        />
      );
    });
  }
}

export default LeftMenuComponent;