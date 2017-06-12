import React, {Component} from 'react';

// Material-ui components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

class LeftMenuComponent extends Component {
  render() {
    let title = this.props.title || 'Menu title';
    let menuItems = this.props.menuItems || [{label: 'Home', route: '/'}];

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
}

export default LeftMenuComponent;