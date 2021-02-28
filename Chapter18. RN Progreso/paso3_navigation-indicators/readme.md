# Enfoque

- Queremos tener varias páginas en nuestra aplicación -> usamos un stack navigator
- Cada página muestra datos procedentes de una api -> usamos useEffect para crear la Promise asociada a la llamada a la api
- Mientras se hace la llamada a la api queremos renderizar un `ActivityIndicator`. Cuando la api se resuelva, queremos renderizar la página
- Vamos a crear un helper que se encarge de tomar un componente genérico, 

Queremos mostrar un ActivityIndicator

## Helper `Loading`

Loading es un componente:
- Toma como argumento un componente y devuelve otro componente
- El componente que devuelve tiene que tener __una propiedad en props que se llame promesa__ y que sea una Promise
- El componente renderiza un `ActivityIndicator` mientras que que se resuelve la promise. Cuando se resuelve la promise el componente renderiza el compomonete que se le paso como argumento

```js
export default function loading(Wrapped) {
  return function LoadingWrapper(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      props.promesa.then(() => setLoading(false), () => setLoading(false));
    }, []);

    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return <Wrapped {...props} />;
    }
  };
}
```

## App

En App se define un StackNavigator con tres screens. Cada Screen es un componente que tiene una prop llamada promesa con una Promise

```js
export default createAppContainer(
  createStackNavigator(
    {
      First: {
        screen: props => (
          <First
            promesa={new Promise(resolve => setTimeout(resolve, 1000))}
            {...props}
          />
        )
      },

...

  },
    { initialRouteName: "First" }
  )
);
```

### screen property

Con la propiedad screen estamos especificando el componeten a utilizar con cada página; Podemos indicar sus propiedades, etc.

## Pantallas 

Cada pantalla se construye con el wrapper Loading. A Loading se le pasa un functional component que será lo que queremos que se muestre en la pantalla, una vez que la promsa se haya resuelto:

```js
const First = loading(({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.item} onPress={() => navigation.navigate("Second")}>
      Second
    </Text>
    <Text style={styles.item} onPress={() => navigation.navigate("Third")}>
      Third
    </Text>
  </View>
));
```

