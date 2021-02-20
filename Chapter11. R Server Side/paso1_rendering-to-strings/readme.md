El servidor - node - solo devuelve el markup. Usamos `renderToString` para generar el markup:

```js
//Se hace el rendering a un string. El servidor devuelve markup
const rendered = renderToString(<App {...props} />);
```