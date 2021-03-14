# Introducción

Se demuestra el uso del almacenamiento local.

Usamos el componente custom que implementa un boton que hemos visto en otro capitulo.

La api para administrar el almacenamiento local es identica en IOs y Android, aunque la implementación por debajo sea diferente. La api es asíncrona e implementa un key-store. Los métodos principales son:

```js
await AsyncStorage.getAllKeys();
await AsyncStorage.multiGet(keys);
await AsyncStorage.setItem(key, value);
await AsyncStorage.clear();
```

- Obtiene todos los keys almacenados
- Recupera todos los valores asociados a un key
- Guarda un key-value
- Limpia el store

## La aplicación

### Construcción

Definimos un estado:

```js
const [key, setKey] = useState(null);
const [value, setValue] = useState(null);
const [source, setSource] = useState([]);
```

Cuando el componente se crea usamos el `useEffect` hook para cargar los items:

```js
  useEffect(() => {
    loadItems();
  }, []);
```

Leemos el store. Primero obtenemos todos los keys, y luego para cada key obtenemos sus valores. Actualizamos el estado informando los valores:

```js
  async function loadItems() {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    setValues(values);
  }
```

### Componentes

Creamos una propiedad `this.data` que contiene un mapa. Los keys que tiene el mapa son _"key"_ y _"value"_, y se informan con el texto que ingresemos en sendos `TextInput`:

```js
<TextInput style={styles.input} value={key} onChangeText={v => {
        this.data = this.data.set("key", v);}}/>
<TextInput style={styles.input} value={value} onChangeText={v => {
    this.data = this.data.set("value", v);}}/>
```

Tenemos también dos botones:

```js
<View style={styles.controls}>
<Button label="Add" onPress={setItem} />
<Button label="Clear" onPress={clearItems} />
</View>
```

