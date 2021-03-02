Los controles para seleccionar la fecha y la hora son diferentes en IOs y Android

# DatePicker

## IOs

Hay un control react-native que se encarga de seleccionar fechas, `DatePickerIOS`:

```js
<View style={styles.datePickerContainer}>
    <Text style={styles.datePickerLabel}>{props.label}</Text>
    <DatePickerIOS mode="date" {...props} />
</View>
```

Entre las props se encuentran:
- `date`. Especifica el valor de la fecha
- `onDateChange`. Handler que se dispara cuando se selecciona una fecha

## Android

No existe un componente react-native, así que habrá que crear uno. El control lo diseñamos de modo que tenga las mismas propiedades que tenía el control para IOs - `date` y `onDateChange`.

Usamos un control `Text` en el que se muestra el valor de `date` y al que hemos añadido un handler cuando se presione, `onPress`.

```js
export default function DatePicker({ label, date, onDateChange }) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{label}</Text>
      <Text onPress={() => pickDate({ date }, onDateChange)}>
        {date.toLocaleDateString()}
      </Text>
    </View>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  onDateChange: PropTypes.func.isRequired
};
```

El handler `onPress` utiliza la api __imperativa__ de Android que abre el selector de fechas:

```js
function pickDate(options, onDateChange) {
  DatePickerAndroid.open(options).then(date =>
    onDateChange(new Date(date.year, date.month, date.day))
  );
}
```

El handler llama a nuestro `onDateChange` pasando la fecha seleccionada.

# TimePicker

## IOs

Sucede lo mismo que con el selector de fechas. Para IOs tenemos un componente react-native que tiene una propiedad en la que se especifica la hora, y un handler que se dispara cada vez que se cambia la hora:

```js
<DatePickerIOS mode="time" date={props.date} onDateChange={props.onTimeChange} />
```

## Android

Como en el caso anterior habrá que crear un componente declarativo custom:

```js
export default function TimePicker({ label, date, onTimeChange }) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{label}</Text>
      <Text onPress={() => pickDate({ date }, onTimeChange)}>
        {date.toLocaleTimeString()}
      </Text>
    </View>
  );
}

TimePicker.propTypes = {
  label: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  onTimeChange: PropTypes.func.isRequired
};
```

El handler `onPress` también hace uso de la Api imperativa de Android:

```js
function pickDate(options, onTimeChange) {
  TimePickerAndroid.open(options).then(time =>
    onTimeChange(new Date(0, 0, 1, time.hour, time.minute))
  );
}
```