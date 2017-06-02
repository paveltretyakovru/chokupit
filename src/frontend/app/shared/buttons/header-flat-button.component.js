import { white } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';

export default class HeaderButtonSaveComponent extends Component {
  getStyles() {
    return {
      buttonStyle: {
        marginTop: 6,
      },
      labelStyle: {
        color: white,
      },
    };
  }

  render() {
    let { labelStyle, buttonStyle } = this.getStyles();

    return (
      <FlatButton
        label={this.props.label || 'Сохранить'}
        style={buttonStyle}
        onClick={
          this.props.handleClick
          || function() {
            console.error('Отсутствует параметр обработчик для кнопки');
          }
        }
        labelStyle={labelStyle}
      />
    );
  }
}
