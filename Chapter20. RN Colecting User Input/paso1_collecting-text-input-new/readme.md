Creamos un helper que llamamos `Input`. La entrada de datos es un `TextInput` y la salida un `Text`:

```js
function Input(props) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{props.label}</Text>
      <TextInput style={styles.textInput} {...props} />
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string
};
```

El `TextInput` tiene algunas propiedades interesantes:
- `secureTextEntry`. Para introducir texto confidencial
- `placeholder`. Para indicar un texto por defecto
- Eventos:
    - `onChangeText`
    - `onSubmitEditing`
    - `onFocus`


```js
      <Input label="Password Input:" secureTextEntry />
      <Input label="Placeholder Text:" placeholder="Search" />
      <Input
        label="Input Events:"
        onChangeText={e => {
          setChangedText(e);
        }}
        onSubmitEditing={e => {
          setSubmittedText(e.nativeEvent.text);
        }}
        onFocus={() => {
          setChangedText("");
          setSubmittedText("");
        }}
      />
```