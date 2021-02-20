Partiendo del _paso1_, vamos a ver como pasar y leer parámetros al navegar. 

```js
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="First Item"
        onPress={() => navigation.navigate("Details", { title: "First Item" })}
      />
```

En este ejemplo hemos pasado un objeto con la propiedad `title` al navegar a `Details`. Podemos leer este parámetro en `Details` usando `navigation.getParam("title")`:

```js
export default function({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>{navigation.getParam("title")}</Text>
    </View>
  );
}
```