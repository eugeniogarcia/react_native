El combobox se implementa en IOs y Android con `Picker`. Los estilos se aplican de forma diferente en ambas plataformas, así que se han creado dos implementaciones, `Select.android.js` y `Select.ios.js`.

La implementación es:

```js
export default function Select(props) {
  return (
    <View>
      <Text style={styles.pickerLabel}>{props.label}</Text>
      <Picker {...props}>
        {props.items.map(i => (
          <Picker.Item key={i.label} {...i} />
        ))}
      </Picker>
    </View>
  );
}
```

Tenemos un `Picker` que contiene `Picker.Item`. En IOs la idea es la misma. La unica diferencia en la implementación es que a la hora de formatearlo tenemos que incluir el `Picker` en uno o varios `View`:

```js
export default function Select(props) {
  return (
    <View style={styles.pickerHeight}>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>{props.label}</Text>
        <Picker style={styles.picker} {...props}>
          {props.items.map(i => (
            <Picker.Item key={i.label} {...i} />
          ))}
        </Picker>
      </View>
    </View>
  );
}
```

El `Picker` tiene una serie de props:
- `selectedValue`. Especifica el valor del `Picker
- `onValueChange`. Handler que se dispara cada vez que se cambia el valor

En nuestro ejemplo usamos varios estados asociados a estas propiedades y a los items que se representarán, de forma que cuando se cambian se actualicen los estados y se repinte el control:

```js
<Select
  label="Size"
  items={sizes}
  selectedValue={selectedSize}
  onValueChange={size => {
    setSelectedSize(size);
    setSelectedGarment(null);
    setAvailableGarments(garments.filter(i => i.sizes.includes(size)));
  }}
/>
<Select
  label="Garment"
  items={availableGarments}
  selectedValue={selectedGarment}
  onValueChange={garment => {
    setSelectedGarment(garment);
    setSelection(
      `${selectedSize} ${garments.find(i => i.value === garment).label}`
    );
  }}
/>
```