# Introducción
 La diferencia entre una __notificación__ y una __alerta__, es que en la notificación no se fuerza al usuario a darse por enterado, de modo que puede seguir con sus acciones normales. En una alerta, por el contrario, se interrumpe al usuario y se le pide feedback.

Hay dos formas de __implementar una alerta con una ventana modal__:
- Usando la API imperativa
- Usando un control react-native - declarativo

## Imperativa

Llamamos a `Alert.alert`:

```js
import { Alert } from "react-native";

export default function ConfirmationAlert(props) {
  if (props.visible) {
    Alert.alert(props.title, props.message, props.buttons);
  }

  return null;
}
```

Los argumentos son:
- El titulo del dialogo
- El mensaje
- Un array con los botones a mostrar en el diaglogo

```js
ConfirmationAlert.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  buttons: PropTypes.array
};

ConfirmationAlert.defaultProps = {
  title: "",
  message: "",
  buttons: []
};
```

Para usar el control:

```js
<ConfirmationAlert
title="Are you sure?"
message="For realz?"
visible={alertVisible}
buttons={[
    { text: "Nope", onPress: toggleAlert },
    { text: "Yep", onPress: toggleAlert }]}/>
```

Hacemos que sea visible o no con otro control:

```js
<Text style={styles.text} onPress={toggleAlert}>Show Confimation Alert</Text>
```

## Declarativa

Con el componente `Modal` mostramos un dialogo modal. El componente hace las veces de contenedor, de modo sus hijos serán los controles que queramos mostrar. En nuestro caso vamos a mostrar tres textos y a dos de los textos le asociamos un handler:

```js
import { View, Text, Modal } from "react-native";

export default function ConfirmationModal(props) {
  return (
    <Modal {...props}>
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <Text style={styles.modalText}>Dude, srsly?</Text>
          <Text style={styles.modalButton} onPress={props.onPressConfirm}>
            Yep
          </Text>
          <Text style={styles.modalButton} onPress={props.onPressCancel}>
            Nope
          </Text>
        </View>
      </View>
    </Modal>
  );
}

ConfirmationModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onPressConfirm: PropTypes.func.isRequired,
  onPressCancel: PropTypes.func.isRequired
};

ConfirmationModal.defaultProps = {
  transparent: true,
  onRequestClose: () => {}
};
```