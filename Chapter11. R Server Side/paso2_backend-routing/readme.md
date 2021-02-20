Queremos usar routing. Para ello cambiamos el route, para que se procesen todas las peticiones - notese el *:

```js
app.get("/*", (req, res) => {
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
```

Usamos un `StaticRouter`, de modo que las rutas definidas en App son resueltas. Por lo demás el servidor sigue retornand markup con `renderToString`.
