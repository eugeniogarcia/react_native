import React, { useState, useEffect } from "react";

export default function App() {
  //En el render inicial el MyComponent es null
  const [MyComponent, setMyComponent] = useState(() => () => null);

  useEffect(() => {
    //Importa el componente de forma lazy, usando una Promise
    //Cuando el componente se ha descargado actualizamos el estado, provocando el reder, y consiguiendo que el componete se pinte
    import("./MyComponent").then(module => {
      setMyComponent(() => module.default);
    });
  }, []);

  return <MyComponent />;
}
