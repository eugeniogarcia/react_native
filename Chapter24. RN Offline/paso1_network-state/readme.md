Utiliza la utilidad `NetInfo` para seguir el estado de la red.

```js
const unsubscribe = NetInfo.addEventListener(onNetworkChange);
```

El handler ira actualizando el estado de nuestra app:

```js
const [connected, setConnected] = useState("");

...

function onNetworkChange(connection) {
    setConnected(connectedMap[connection.type]);
}
```

Montamos todo esto en el hook `useEffect`:

```js
  //Cuando se construye el componente empezamos a monitorizar el estaod de la red.
  useEffect(() => {
    function onNetworkChange(connection) {
      setConnected(connectedMap[connection.type]);
    }

    //Usa la utilidad para monitorizar el estado de la red. Cuando cambia actualizaremos el estado de la App. Devuelve un lambda que nos permite eliminar la subscripción
    const unsubscribe = NetInfo.addEventListener(onNetworkChange);

    return () => {
      unsubscribe();
    };
  }, []);
  ```

  Notese como al subscribirnos al estado de la red obtenemos un método que nos permite cancelar la subscripción. Este método lo retornamos con el `useEffect` para que así cuando el componente se destruya se elimine la subscripción.
