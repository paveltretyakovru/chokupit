# Чё купить :)

## Страницы

### Обновление заголовка страницы
Чтобы обновить заголовок страницы в компоненте AppBar в компоненте
HeaderComponent, нужно воспользоваться методом:

```
this.props.headerActions.updateHeaderTitle.
```

Данные метод передается в каждую компоненту, коя передается в роутеры.

```
class SomePageContainer extends Component {
  componentWillMount() {
    this.props.headerActions.updateHeaderTitle('New header titile');
  }
}
```

### Боковые кнопки в шапке (AppBar)
Чтобы назначить изменить кнопки в шапке приложения (AppBar),
нужно воспользоваться методом:

```
      this.setHeaderButtons(<LeftButton />, <RightButton />);
```

Данный метод передается в каждую компоненту, коя передается в роутеры.
Пример использования:

```
componentDidMount() {
    this.setHeaderButtons(<MyButton />, null);
}
```

Здесь левая кнопка будет заменена компонентой <MyButton />, правая останется
неизменненной.