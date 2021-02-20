En App cargamos un componente usando una promise. 

```js
useEffect(() => {
    import("./MyComponent").then(module => {
      setMyComponent(() => module.default);
    });
  }, []);
```

Una vez que la promise se ha cumplido forzamos el re-render actualizado el estado:

```js
const [MyComponent, setMyComponent] = useState(() => () => null);
```

En la promise hacemos referencia al objeto exportado por defecto en el módulo, por eso usamos `module.default`