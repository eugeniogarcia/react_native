Muestra iconos. Usamos la librería de iconos:

```js
import Icon from "react-native-vector-icons/FontAwesome";
```

Carga una lista de categorias y los iconos de cada categoría. En el json tenemos las categorias como campos y un array con cada icono.

```js
import iconNames from "./icon-names.json";
```

Con este json cargamos por una lado la lista de categorías:

```js
const categories = Object.keys(iconNames);
```

Con esto informamos el estado. Por una lado un estado con la categoría seleccionada, y otra categoría con los valores de cada categoría:

```js
const [selected, setSelected] = useState("Web Application Icons");
const [listSource, setListSource] = useState([]);
```

Con esta función actualizamos el valor del estado:

```js
function updateListSource(selected) {
    setListSource(iconNames[selected]);
    setSelected(selected);
}
```

Con un `useEffect` actualizamos el contenido del componente: 

```js
  useEffect(() => {
    //Actualizamos el contenido del componente con la lista de iconos
    updateListSource(selected);
  }, []);
```

Y visualmente tenemos una combo, `Picker` con la lista de categorías. Al seleccionar un valor de la combo se actualiza el estado, lo que hace que se actualice la lista.

```js
<View style={styles.container}>
    <View style={styles.picker}>
    <Picker selectedValue={selected} onValueChange={updateListSource}>
        {categories.map(category => (
        <Picker.Item key={category} label={category} value={category} />
        ))}
    </Picker>
    </View>
    <FlatList
    style={styles.icons}
    data={listSource.map((value, key) => ({ key: key.toString(), value }))}
    renderItem={({ item }) => (
        <View style={styles.item}>
        <Icon name={item.value} style={styles.itemIcon} />
        <Text style={styles.itemText}>{item.value}</Text>
        </View>
    )}
    />
</View>
```

En la lista usamos un `FlatList`, el que se especifica cuales son los datos con `data`, y como se visualizan los datos en la lista `renderItem`. Los datos son de la forma:

```js
{
    key: "clave",
    value: "valor"
}
```

Los datos se visualizan con una vista en la que se indica el el icono y un texto. El icono:

```js
<Icon name={item.value} style={styles.itemIcon} />
```