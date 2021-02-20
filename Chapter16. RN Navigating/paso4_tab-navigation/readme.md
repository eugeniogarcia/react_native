Partiendo del _paso3_, vamos a usar una navegación diferente. En lugar de usar `createStackNavigator`, vamos a utilizar `` o ``  dependiendo de la plataforma:

```js
const { createNavigator } = Platform.select({
  ios: { createNavigator: createBottomTabNavigator },
  android: { createNavigator: createDrawerNavigator }
});
```

Y lo usamos como hasta ahora:

```js
export default createAppContainer(
  createNavigator({ Home, News, Settings }, { initialRouteName: "Home" })
);
```

