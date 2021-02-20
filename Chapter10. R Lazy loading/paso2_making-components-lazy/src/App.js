import React, { Suspense, lazy } from "react";
import { FadeLoader } from "react-spinners";

//Importa de forma lazy el compoente. Esto dota al componente MyComponent del caracter Lazy
//const MyComponent = lazy(() => import("./MyComponent"));
//Vamos a simular latencia
const MyComponent = lazy(() =>
  Promise.all([
    import("./MyComponent"),
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
  ]).then(([m]) => m)
);

export default function App() {
  //MyComponent es lazy. Mientras se descarga, con Supense conseguimos que se muestre mientras se descarga el componente, lo que hayamos indicado en el fallback
  return (
    //<Suspense fallback={"loading..."}>
      <Suspense fallback={<FadeLoader color={"lightblue"} size={150} />}>
      <MyComponent />
    </Suspense>
  );
}
