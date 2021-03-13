Vamos a demostrar como redimensionar una imagen. La imagen tiene dos propiedades, `width` y `height` para controlar el tamaño: 

```js
<Image source={source} style={{ width, height }} />
```

En este ejemplo vamos a cambiar las dimensiones usando un slider. Creamos un estado en la App para controlar las dimensiones. Nuestro componente `Image` usará el estado, y nuestro componente `Slider` actualizará el estado:

```js
export default function App() {
  const source = require("./images/flux.png");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  
return (
    <View style={styles.container}>
      <Image source={source} style={{ width, height }} />
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
      <Slider
        style={styles.slider}
        minimumValue={50}
        maximumValue={150}
        value={width}
        onValueChange={value => {
          setWidth(value);
          setHeight(value);
        }}
      />
    </View>
  );
}
```