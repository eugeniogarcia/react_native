Construimos en el proyacto del paso1. Queremos mostrar el control con un estilo diferente  cuando de lo que estemos alertando sea de un error. El control se usa de la misma forma, solo vamos a cambiar el estilo:

```js
const innerViewStyle = [styles.modalInner, styles.modalInnerError];
const textStyle = [styles.modalText, styles.modalTextError];
const buttonStyle = [styles.modalButton, styles.modalButtonError];
```

Y utilizamos los estilos:

```js
export default function ErrorModal(props) {
  return (
    <Modal {...props}>
      <View style={styles.modalContainer}>
        <View style={innerViewStyle}>
          <Text style={textStyle}>Epic fail!</Text>
          <Text style={buttonStyle} onPress={props.onPressConfirm}>
            Fix it
          </Text>
          <Text style={buttonStyle} onPress={props.onPressCancel}>
            Ignore it
          </Text>
        </View>
      </View>
    </Modal>
  );
}
```

Al usar, por ejemplo, `{buttonStyle}`, estamos utilizando la combinación de los estilos de `[styles.modalButton, styles.modalButtonError]`. Jugamos con que en caso de que una propiedad este especificada en más de uno de los estilos del array, el último valor aplicado prebalece, en nuestro caso, el que hayamos indicado en `styles.modalButtonError`.
