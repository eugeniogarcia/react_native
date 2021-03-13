Vamos a combinar varias piezas para crear un componente que muestra un placeholder mientras la imagen remota se descarga.

El componente tiene un estado que nos dice si la imagen esta o no disponible. El estado se usa para controlar cuando se tiene que mostrar el placeholder:

```js
export default function LazyImage(props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={props.style}>
      <Placeholder loaded={loaded} {...props} />
      <Image
        {...props}
        onLoad={() => {
          setLoaded(true);
        }}
      />
    </View>
  );
}
```

El estado se cambia con el método `onLoad` del componente `Image`. Cuando la imagen se ha cargado actualizamos el estado para que se oculte el placeholder.

El componente `Placeholder` es muy sencillo, apenas carga una imagen o no pinta nada:

```js
function Placeholder(props) {
  if (props.loaded) {
    return null;
  } else {
    return <Image style={props.style} source={placeholder} />;
  }
}
```

En la App vamos a reutilizar el componente `Button` que creamos en otro capítulo. Al pulsar el botón actualizamos la fuente de la imagen. La fuente de la imagen es un estado, de modo que al cambiar la fuente con el botón se actualice la imagen:

```js
const remote =
  "https://facebook.github.io/react-native/docs/assets/favicon.png";

export default function LazyLoading() {
  const [source, setSource] = useState(null);

  return (
    <View style={styles.container}>
      <LazyImage
        style={{ width: 200, height: 100 }}
        resizeMode="contain"
        source={source}
      />
      <Button
        label="Load Remote"
        onPress={() => {
          setSource({ uri: remote });
        }}
      />
    </View>
  );
}
```