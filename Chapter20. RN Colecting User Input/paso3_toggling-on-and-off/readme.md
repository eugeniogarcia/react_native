Un check se implementa con `Switch` tanto en Android como en IOs:

```js
export default function CustomSwitch(props) {
  return (
    <View style={styles.customSwitch}>
      <Text>{props.label}</Text>
      <Switch {...props} />
    </View>
  );
}

CustomSwitch.propTypes = {
  label: PropTypes.string
};
```

`Switch` tiene una serie de props:
- `value`. Booleano que determina la posición del switch
- `disabled`. Booleano que especifica si el switch está o no activo
- `onValueChange`. Handler que se dispara cuando se cambia el valor del switch


Como en los ejemplos anteriores, asociamos al control variables de estado, de modo que cuando se cambie el estado, se repinte el control.

```js
import Switch from "./Switch";


<View style={styles.container}>
    <Switch
    label="Disable Next Switch"
    value={first}
    disabled={second}
    onValueChange={setFirst}
    />
    <Switch
    label="Disable Previous Switch"
    value={second}
    disabled={first}
    onValueChange={setSecond}
    />
</View>
```