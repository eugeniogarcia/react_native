a partir de _paso3_, vamos a simular que los datos vienen de la llamada a una API.

Para construir nuestro mock de api tenemos una función que devuelve una Promise. La Promise se resuelve con un objeto:

```json
{
  "json":
}
```

La propiedad `json` de este objeto es a su vez una promise. Construimos la promise con `Promise.resolve()`. Este método devuelve una Promise que se resolvera con el valor que indiquemos: 
- Otra Promise
- Un then-able
- Un valor concreto

Así queda el mock:

```js
export function fetchItems(filter, asc) {
  return new Promise(resolve => {
    resolve({
      json: () =>
        Promise.resolve({items: filterAndSort(items, filter, asc)})
    });
  });
}
```

El `ListContainer` quedaría como sigue:
- Creamos el estado como antes, solo que en el estado `data` guardamos vacio
- Usamos un `useEffect` para inicializar el estado `data`
- Notese como el primer then resuelve el objeto {"json": Promise}, y el segundo then el valor de la Promise que es en realidad el valor de la propiedad json

```js
export default function ListContainer() {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  // Actualiza la presentación con los datos de la API, pero solo en la carga inicial 
  useEffect(() => {
    fetchItems(filter, asc)
      .then(resp => resp.json())
      .then(({ items }) => {
        setData(mapItems(items));
      });
  }, []);
```

El `useEffect` se llama solo una vez porque hemos indicado `[]` en el segundo argumento. Esto no significa que se llame a la Api solo una vez, porque en los handlers la vamos a llamar de nuevo.