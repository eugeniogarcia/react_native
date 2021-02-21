Usa un `FlatList` para mostrar una lista de datos:

```js
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      />
    </View>
```

Los datos se especifican con la propiedad `data` y lo que se pinta con la propiedad `renderItem`.

El estilo se crea con `StyleSheet.create`. Fijemonos como en el contenedor indicamos que la información se pinte como columna:

```js
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 20
  },

  item: {
    margin: 5,
    padding: 5,
    color: "slategrey",
    backgroundColor: "ghostwhite",
    textAlign: "center"
  }
});
```