a partir de _paso1_, vamos a añadir estado, y controles para filtrar y ordenar los datos de la lista. Descomponemos nuestro control como sigue:

- Un control para almacenar el estado
- Un par de controles, sin estado, para administrar el estado. Estos controles se incluirán en la cabecera de la lista
- El control donde se visualiza la lista

## Contenedor del Estado `ListContainer`

Guardamos como estado el criterio de filtrado y de ordenación, asi como los propios datos filtrados y ordenados. Cuando cambiamos el filtro y el criterio de ordenación se actualiza el estado, y se refrescan la vista:

```js
export default function ListContainer() {
    const rawdata = new Array(100).fill(null).map((v, i) => `Item ${i}`);
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState(filterAndSort(rawdata,"", asc));
  );
```

Este contenedor es el padre de la lista - componente `List`:

```js
  return (
    <List
      data={mapItems(data)}
      asc={asc}
      onFilter={(text) => {
        setFilter(text);
        setData(filterAndSort(data, text, asc));
      }}
      onSort={() => {
        setAsc(!asc);
        setData(filterAndSort(data, filter, asc));
      }}
    />
  );
```

Pasamos los datos, dos handlers para cambiar el orden y el criterio de filtrado.

## La lista `List`

Contiene la `FlatList`. Además de las propiedades `data` y `renderItem` le añadimos otra propiedad, `ListHeaderComponent` que define la cabecera de la lista:

```js
export default function List({ MiControl, data, onFilter, onSort, asc }) {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={<MiControl {...{ onFilter, onSort, asc }} />}
      renderItem={({ item }) => <Text key={item.key} style={styles.item}>{item.value}</Text>}
    />
  );
}
```

Con la propiedad `MiControl` especificamos cualquier componente React:

```js
List.propTypes = {
  MiControl: PropTypes.func.isRequired,

...

};

//Crea una propiedad MiControl. Contiene el control que vamos a usar en le header
List.defaultProps = {
  MiControl: ListControls
};
```

Los controles los implementa el componente `ListControls`.

## Controles de la lista `ListControls`

Usamos los handlers y el estado de la lista. Los accemos accesibles desde dos controles, `ListFilter` y `ListSort`:

```js
export default function ListControls({ onFilter, onSort, asc }) {
  return (
    <View style={styles.controls}>
      <ListFilter onFilter={onFilter} />
      <ListSort onSort={onSort} asc={asc} />
    </View>
  );  
}
```