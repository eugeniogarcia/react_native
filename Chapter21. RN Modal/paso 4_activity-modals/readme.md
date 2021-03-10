Vamos a crear una alerta que muestre un indicador de progreso, y se cierre automáticamente cuando la promise se resuelva.

```js
export default function Activity(props) {
  return (
    <Modal visible={props.visible} transparent>
      <View style={styles.modalContainer}>
        <ActivityIndicator size={props.size} />
      </View>
    </Modal>
  );
}
```

Aquí hemos indicado que el `Modal` sea `transparent`. Cuando la `Modal` sea visible seguiremos viendo lo que hay detras gracias a que hemos dicho que sea transparente. El estilo es:

```js
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  }
```

No pasamos la promise al componente, sino que gestionamos el componente con un estado que esta asociado a la promise:

```js
export default function App() {
  const [fetching, setFetching] = useState(false);
  const [promise, setPromise] = useState(Promise.resolve());

  function onPress() {
    setPromise(
      new Promise(resolve => setTimeout(resolve, 3000)).then(() => {
        setFetching(false);
      })
    );
    setFetching(true);
  }

  return (
    <View style={styles.container}>
      <Activity visible={fetching} />
      <Text onPress={onPress}>Fetch Stuff...</Text>
    </View>
  );
}
```