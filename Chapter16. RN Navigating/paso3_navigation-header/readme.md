Partiendo del _paso2_, vamos a ver como pasar más parametros, y especialmente, como especificar que mostrar en la barra de navegación.

Pasamos un json al navegar:

```js
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="First Item"
        onPress={() =>
          navigation.navigate("Details", {
            title: "First Item",
            content: "First Item Content",
            stock: 1
          })
        }
      />
```

La barra de navegación la podemos informar usando la propiedad estática `navigationOptions`. Aquí estamos informando el `title` de la barra:

```js
Home.navigationOptions = {
  title: "Home"
};
```

Podemos incluir una presentación más elaborada en la barra de navegación:

```js
Details.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("title"),
  headerRight: (
    <Button
      title="Buy"
      onPress={() => {}}
      disabled={navigation.getParam("stock") === 0}
    />
  )
});
```