# Чё купить :)

## Страницы

### Обновление заголовка страницы
Чтобы обновить заголовок страницы в компоненте AppBar в компоненте
HeaderComponent, нужно воспользоваться методоом:

```
this.props.headerActions.updateHeaderTitle.
```

Данные метод передается в кажду компоненту, коя передается в роутеры.

```
class SomePageContainer extends Component {
  componentWillMount() {
    this.props.headerActions.updateHeaderTitle('New header titile');
  }
}
```