En este proyecto se demuestra como usar botones. El botón es un `TouchableOpacity` o un `TouchableHighlight`. La diferencia entre ambos es su comportamiento visual. En el primer caso cuando se pulsa el botón se hace semi-transparente, en el segundo caso el botón se resalta.

En este proyecto creamos un componente custom que llamamos `Button` y que nos permitirá demostrar los dos tipos.

Creamos un mapa con los dos tipos:

```js
//Definimos un map (key - values)
const touchables = new Map([
  ["opacity", TouchableOpacity],
  ["highlight", TouchableHighlight],
  [undefined, TouchableOpacity]
]);
```

El control quedará como sigue:

```js
export default function Button({ label, onPress, touchable }) {
  //Obtenemos el tipo de boton que vamos a usar. Touchable será un componente
  const Touchable = touchables.get(touchable);
  //Indicamos las propiedades que vamos a pasar a nuestro control. El estilo y el handler
  const touchableProps = {
    style: styles.button,
    underlayColor: "rgba(112,128,144,0.3)",
    onPress
  };

  //Rederizamos nuestro control con las propiedades
  return (
    <Touchable {...touchableProps}>
      <Text style={styles.buttonText}> {label} </Text>
    </Touchable>
  );
}
```

Definimos las propiedades de nuestro `Button`. Notese como definimos la propiedad `touchable`:

```js
Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  touchable: PropTypes.oneOf(["opacity", "highlight"])
};
```

