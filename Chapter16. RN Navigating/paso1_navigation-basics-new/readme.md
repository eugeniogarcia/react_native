En `App.js` se crea un __stacknavigator__ con dos páginas, `Home` y `Settings`, y fija como página inicial `Home`:

```js
export default createAppContainer(
  createStackNavigator({ Home, Settings }, { initialRouteName: "Home" })
);
```

Usamos `navigation.navigate("Settings")` para poder ir a la página de Settings:

```js
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}
```
