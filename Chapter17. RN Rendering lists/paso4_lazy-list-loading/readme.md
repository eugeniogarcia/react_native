a partir de _paso4_, vamos a simular el caso en el que la api devuelve los datos de 20 en 20, y que cada vez que scroleemos se recuperen otros 20 datos.

Con esta función devolvemos un iterable - por eso el "*":

```js
function* genItems() {
  let cnt = 0;

  while (true) {
    yield `Item ${cnt++}`;
  }
}
```

La Api queda como sigue:

```js
export function fetchItems() {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        items: new Array(20).fill(null).map(() => items.next().value)
      })
  });
}
```

Hemos quitado del control `List` la cabecera donde filtrabamos y ordenabamos los datos, y hemos añadido la propiedad `onEndReached` que nos permite indicar el handler que se llamará cuando se scrolee hasta el final de la lista. El handler se informa en la propiedad `obtieneDatos`:

```js
export default function List({ data, obtieneDatos }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      onEndReached={obtieneDatos}
    />
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  obtieneDatos: PropTypes.func.isRequired
};
```

En el contenedor le pasamos el handler en la propiedad `obtieneDatos`:

```js
export default function ListContainer() {
  function fetchItems() {
    return api.fetchItems()
      .then(resp => resp.json())
      .then(({ items }) => {
        setData(
          items.map((value, i) => ({
            key: i.toString(),
            value
          }))
        );
      });
  }

  const [data, setData] = useState([]);
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  return <List data={data} obtieneDatos={fetchItems} />;
}
```