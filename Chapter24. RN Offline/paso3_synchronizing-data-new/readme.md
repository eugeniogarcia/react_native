# Almacenamiento de datos

En el modulo `store.js` definimos los métodos que vamos a usar para actualizar y leer datos. En este ejemplo lo que haremos es que cuando haya conexión los datos se gestionen con llamadas a una api, pero cuando no haya conexión se guarden en un store local.

## Almacenar datos

Almacena un key-value. Devuelve una Promise. Si hay conexión se hace la llamada a la api y retorna true. Si no hay conexión guarda los datos en el store, actualiza el array con los datos pendientes de sincronizar, y retorna false.

```js
export function set(key, value) {
  return new Promise((resolve, reject) => {
    if (connected) {
      fakeNetworkData[key] = value;
      resolve(true);
    } 
    else {
      AsyncStorage.setItem(key, value.toString()).then(
        () => {
          unsynced.push(key);
          resolve(false);
        },
        err => reject(err)
      );
    }
  });
}
```

## Recupera datos

Metodo que retorna una Promise con los datos asociados a una key, o si no se informa ninguna key, todos los datos de todas las keys. Si hay conexión los datos los recupera llamando a la Api, pero en caso contrario lo hace desde el store:

```js
export function get(key) {
  return new Promise((resolve, reject) => {
    if (connected) {
      resolve(key ? fakeNetworkData[key] : fakeNetworkData);
    } 
    else if (key) {
      AsyncStorage.getItem(key).then(
        item => resolve(item),
        err => reject(err)
      );
    } else {
      AsyncStorage.getAllKeys().then(
        keys =>
          AsyncStorage.multiGet(keys).then(
            items => resolve(Object.fromEntries(items)),
            err => reject(err)
          ),
        err => reject(err)
      );
    }
  });
}
```

## Estado de la conexion

Usamos `NetInfo` para conocer el estado de la conexión. En primer lugar obtenemos el estado inicial de la conexión:

```js
NetInfo.fetch().then(
  connection => {
    connected = ["wifi", "unknown"].includes(connection.type);
  },
  () => {
    connected = false;
  }
);
```

Y a continuación nos subscribimos a los cambios de estado. Cada vez que cambia el estado de la conexión actualizamos nuestro estado, y en caso de que haya una conexión activa, enviamos cualquier dato almacenado en nuestro store al servidor:

```js
NetInfo.addEventListener(connection => {
  connected = ["wifi", "unknown"].includes(connection.type);
  if (connected && unsynced.length) {
    AsyncStorage.multiGet(unsynced).then(items => {
      items.forEach(([key, val]) => set(key, val));
      unsynced.length = 0;
    });
  }
});
```

# Aplicación

Usamos el estado para guardar el estado de la conexión, así como los datos propiamente dichos.

```js
const [message, setMessage] = useState(null);
const [first, setFirst] = useState(false);
const [second, setSecond] = useState(false);
const [third, setThird] = useState(false);
```

Definimos una función que devuelve una lambda para almacenar datos para el key indicado. La función actualiza el estado de datos y el de la conexión:

```js
function save(key) {
return value => {
    set(key, value).then(
    connected => {
        //Actualiza el estado de datos
        setters.get(key)(value);
        //Actualiza el estado de la conexión
        setMessage(connected ? null : "Saved Offline");
    },
    err => {
        setMessage(err);
    }
    );
};
}
```

Con el hook `useEffect` recuperara los datos y actualizará el estado.