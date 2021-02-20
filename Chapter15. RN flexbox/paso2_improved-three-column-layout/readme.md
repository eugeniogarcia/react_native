Con respecto al paso1 actualizamos los estilos para que cada box ocupe todo el espacio disponible:

```json
  box: {
    height: 100,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray"
  },
```

Creamos un componente helper para evitar que repetir una y otra vez la definición de cada componente:

```js
//Define un componente helper para evitar tener que escribir tanto
export default function Box({ children }) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}

//Es obligatorio especificar los hijos
Box.propTypes = {
  children: PropTypes.node.isRequired
};
```