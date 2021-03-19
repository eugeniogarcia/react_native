# App

En la App vamos a crear un stack-navigator:

```js
const AppNavigator = createStackNavigator(
  {
    Home,
    Settings,
    Help,
    Contact
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

export default createAppContainer(AppNavigator);
```

Destacar que __estamos ocultando el header en nuestro StackNavigator__. Esto lo hacemos así porque vamos a incluir la barra de navegación en las propias páginas.

# Contenedor

Vamos a crear un componente que actuara de plantilla para todas las páginas. El componente le llamaremos `Container`. Como hicimos en el proyecto del paso1, para poder utilizar un contenedor de Native-base necesitamos cargar los fonts. Mientras se cargan mostraremos un indicador de progreso:

```js
export default function Container({ children, navigation }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    }).then(() => setReady(true));
  }, []);

  if (ready) {
    return (
      <NativeBaseContainer>

      </NativeBaseContainer>
    );
  } else {
    return <AppLoading />;
  }
}
```

Observese como al Contenedor le pasamos el navegador, `navigation`:

```js
export default function Container({ children, navigation }) {
```

El contenedor tendra:
- Cabecera. Mostramos en el título el nombre de la ruta con `navigation.state.routeName`:

```js
<NativeBaseContainer>
<Header noLeft style={{paddingTop: getStatusBarHeight(),height: 54 + getStatusBarHeight()}}>
    <Body>
        <Title>{navigation.state.routeName}</Title>
    </Body>
</Header>
```

- Contenido:
```js
<Content>{children}</Content>
```

- Pie de página. En el pie de pagina vamos a incluir un tab con cuatro botones. Solo uno de los botones estará activo a un tiempo, según la ruta - por ejemplo, `navigation.state.routeName === "Home"`. Cuando pulsamos el boton navegaremos a la página, por ejemplo, `navigation.navigate("Home", {})`:

```js
<Footer>
    <FooterTab>
    <Button vertical active={navigation.state.routeName === "Home"} onPress={() => {
        navigation.navigate("Home", {});}}>
        <Icon name="home" />
        <Text>Home</Text>
    </Button>
    <Button vertical active={navigation.state.routeName === "Settings"}onPress={() => {
        navigation.navigate("Settings", {});}}>
        <Icon name="settings" />
        <Text>Settings</Text>
    </Button>
    <Button vertical active={navigation.state.routeName === "Help"} onPress={() => {
        navigation.navigate("Help", {});}}>
        <Icon active name="help" />
        <Text>Help</Text>
    </Button>
    <Button vertical active={navigation.state.routeName === "Contact"} onPress={() => {
        navigation.navigate("Contact", {}); }}>
        <Icon name="person" />
        <Text>Contact</Text>
    </Button>
    </FooterTab>
</Footer>
</NativeBaseContainer>
```

# Paginas

Las paginas las creamos usando componentes con la estructura que hemos 

```js
export default function Home({ navigation }) {
  return (
    <Container navigation={navigation}>
      <Text>Home content goes here...</Text>
    </Container>
  );
}```