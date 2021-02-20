Partiendo del _paso3_, vamos a añadir estado:

```js
export default function App() {
  const [stock, setStock] = useState({
    first: 1,
    second: 0,
    third: 200
  });

  function updateStock(id) {
    setStock({ ...stock, [id]: stock[id] === 0 ? 0 : stock[id] - 1 });
  }

  return <Nav screenProps={{ stock, updateStock }} />;
}
```

El estado lo pasamos al componente `Nav`, así como una función que permite manipularlo. El componente Nav es nuestro componente base, el contenedor de la app:

```js
const Nav = createAppContainer(
  createStackNavigator({ Home, Details }, { initialRouteName: "Home" })
);
```

## navigation-options

Cada pantalla puede configurarse para definir como se presentará en un navegador padre. En nuestro caso podemos definir como `Home` y `Details` se mostrarán en la navegación.

- Configuración  estática. Se especifican las propiedades con `navigationOptions`

```js
Home.navigationOptions = {
  title: "Home"
};
```

- Configuración dinámica.

En este caso indicamos una función, que retorna el objeto con las opciones de navegación. Las propiedades disponibles en la pantalla pueden clasificarse en tres:
    - __navigation__. Propiedades asociadas al objeto de navegación `navigation.state`. `navigation.state.params.name` retornará el parametro name que se haya pasado. Es equivalente a `navigator.getParam()`. Asi obtendremos las propiedades que se hayan pasado via `navigator.navigate()`
    - __screenProps__. Las propiedades que se pasan al componente desde el contenedor, `Nav` en nuestro caso
    - __navigationOptions__. Valores por defecto de navegación, que titulo y opciones de navegación vamos a especificar en cada página

En el ejemplo que sigue podemos ver que usamos `screenProps` para acceder a las propiedades pasadas desde `Nav`, y `navigation.getParam("")` para acceder a las propiedades de navegación. 
 
```js
Details.navigationOptions = ({
  navigation,
  screenProps: { stock, updateStock }
}) => {
  const id = navigation.getParam("id");
  const title = navigation.getParam("title");

  return {
    title,
    headerRight: (
      <Button
        title="Buy"
        onPress={() => updateStock(id)}
        disabled={stock[id] === 0}
      />
    )
  };
};
```
