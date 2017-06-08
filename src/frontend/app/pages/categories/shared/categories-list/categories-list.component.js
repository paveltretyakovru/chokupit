import React, {Component} from 'react';

// Material-ui components
import {List} from 'material-ui';

export class CategoriesListComponent extends Component {
  render() {
    return (
      <div>
        Hello list
        <List>
          {/* Список категорий */}
        </List>
      </div>
    );
  }

  testFunction() {
    console.log('test');
  }
}

export default CategoriesListComponent;