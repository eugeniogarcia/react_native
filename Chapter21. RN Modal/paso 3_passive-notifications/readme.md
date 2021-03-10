# Notificaciones

Las notificaciones no son intrusivas. Muestran un mensaje sin interrumpir la actividad del usuario, y el mensaje, tras un cierto tiempo, desaparece.

La implementación en Android y IOs es diferente. En Android tenemos un componente react-native, en IOs tenemos que construirlo, usando una ventana modal.

## Android

`Notification.android.js` usa la Api imperativa de Android `ToastAndroid.show` y la implementa como un componente. __Notese__ que el componente __no renderiza nada__, retorna siempre null.

```js
export default function Notification({ message, duration }) {
  if (message) {
    ToastAndroid.show(message, duration);
  }

  return null;
}

Notification.propTypes = {
  message: PropTypes.string,
  duration: PropTypes.number.isRequired
};

Notification.defaultProps = {
  duration: ToastAndroid.LONG
};
```

Para utilizarla pasamos un `message` que esta respaldado por el estado:

```js
<Notification message={message} />
```

## IOS

No hay un soporte nativo en IOs, así que construiremos un componente que implementa la notificación usado `Modal` components:

```js
export default function Notification(props) {
  const [message, setMessage] = useState(props.message);

  //Este hook se utiliza cuando cambia el props.message
  useEffect(() => {
    //Si se informa un mensaje actualizamos el estado, para que se rendericen los hijos...
    if (!message) {
      setMessage(props.message);

      //... y tras un cierto tiempo volvemos a cambiar el estado
      const timer = setTimeout(() => {
        setMessage(null);
      }, props.duration);

      //Si salimos del componente nos aseguramos de parar cualquier temporizador que pudiera estar en funcionamiento
      return () => {
        clearTimeout(timer);
      };
    }
  }, [props.message]);

  //La ventana modal tiene una animación que hace que la ventana desaparezca al poco tiempo
  const modalProps = {
    animationType: "fade",
    transparent: true,
    visible: Boolean(message)
  };

  //La notificación se muestra como una ventana modal que desaparece al poco tiempo
  return (
    <Modal {...modalProps}>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationInner}>
          <Text>{message}</Text>
        </View>
      </View>
    </Modal>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
  duration: PropTypes.number.isRequired
};

Notification.defaultProps = {
  duration: 1500
};
```

Definimos un estado:

```js
const [message, setMessage] = useState(props.message);
```

Cuando se haya creado el componente, y cada vez que se cambie el `message` lanzamos un hook:

```js
useEffect(() => {
  if (!message) {
    setMessage(props.message);

    //... y tras un cierto tiempo volvemos a cambiar el estado
    const timer = setTimeout(() => {
      setMessage(null);
    }, props.duration);

    //Si salimos del componente nos aseguramos de parar cualquier temporizador que pudiera estar en funcionamiento
    return () => {
      clearTimeout(timer);
    };
  }
}, [props.message]);
```

El hook hace dos cosas:
- Actualiza el estado con el valor del mensaje
- Arranca un timer, que tras `props.duration` limpia el estado


El componente muestra un dialogo modal con el mensaje. El mensaje es el estado, así que cuando cambiamos el estado se rendirizará el componente - primero para informar el mensaje, después cuando el temporizador termina, para quitar el mensaje

```js
  //La notificación se muestra como una ventana modal que desaparece al poco tiempo
  return (
    <Modal {...modalProps}>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationInner}>
          <Text>{message}</Text>
        </View>
      </View>
    </Modal>
  );
}
```

Notese la sutileza. La propiedad `visible` de `Modal` controla si la ventana se muestra o no, y estamos seteando el atributo con un booleano que depende de que este o no informado el mensaje:

```js
  const modalProps = {
    animationType: "fade",
    transparent: true,
    visible: Boolean(message)
  };

  return (
    <Modal {...modalProps}>
```