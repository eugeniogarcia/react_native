Otra forma de lugar lo que hemos hecho en el _paso1_, en lugar de cargar explicitamente el módulo con un import, podemos usar la función `lazy`:

```
const MyComponent = lazy(() => import("./MyComponent"));
```

Para usar `lazy()` hay que redenrizar los componentes Lazy dentro de un `Suspense`. Puede que el `Suspense` no sea inmediatamente el padre del componente Lazy, pero tiene que estar en la jerarquia del componente.

El `fallback` de `Suspense` admite cualquier JSX. Podemos usar un spinner. en la librería  

```js
import { FadeLoader } from "react-spinners";

...


<Suspense fallback={<FadeLoader color={"lightblue"} size={150} />}>
```