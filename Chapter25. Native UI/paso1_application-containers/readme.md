# Introducción

`Native-Base` nos ofrece una Api para construir aplicaciones nativas. Lo primero para poder utilizar Native-Base es descargar unos fonts.

Podemos descargar los fonts y mostrar un indicador de progreso mientras tanto:

```js
export default function Container({ title, children }) {
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
        <Header noLeft style={{paddingTop: getStatusBarHeight(),height: 54 + getStatusBarHeight()}}>
          <Body>
            <Title>{title}</Title>
          </Body>
        </Header>
        <Content>{children}</Content>
      </NativeBaseContainer>
    );
  } else {
    return <AppLoading />;
  }
```

## Native Base

La estructura de la aplicación tiene una cabecera y un contenido dentro de un contentenedor:

```js
<NativeBaseContainer>
    <Header>
        <Body>
        <Title>{title}</Title>
        </Body>
    </Header>
    <Content>{children}</Content>
</NativeBaseContainer>
```

