Las imagenes se presenta con `Image`. 

```js
<Image style={styles.image} source={reactSource} />
```

Las fuentes para las imagenes pueden ser dos:
- Una ubicación remota
- Una imagen local
 
Los tipos de fuente se pueden expresar como sigue:

```js
const sourceProp = PropTypes.oneOfType([
  PropTypes.shape({
    uri: PropTypes.string.isRequired
  }),
  PropTypes.number
]).isRequired;
```

Es decir, una fuente remota se expresa así:

```json
{
    uri: "direccion de la fuente"
} 

Y una fuente local se expresa con un número. Aquí tenemos un ejemplo de ambos tipos de fuente:

```js
App.defaultProps = {
  reactSource: {
    uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"
  },
  relaySource: require("./images/relay.png")
};
```

Para la fuente local usamos el método `require()`. Este método devuelve un número.

