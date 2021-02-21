Como no existe un control con una barra de progeso, vamos a crear una, o mejor dicho, dos, una para Android y otra para IOS.

La barra de progreso:

```js
export default function ProgressBar({ progress, label }) {
  return (
    <View style={styles.progress}>
      <ProgressLabel show={label} progress={progress} />
      <ProgressBarComponent {...progressProps} style={styles.progress} progress={progress}/>
    </View>
  );
}
```

Usa dos componentes `ProgressLabel` y `ProgressBarComponent`. `ProgressBarComponent` es nuestra barra de progreso:

```js
import { ProgressBarComponent, progressProps } from "./ProgressBarComponent";
```

Lo destacado es que tenemos dos archivos con una implementación de la barra, `ProgressBarComponent.android.js` y `ProgressBarComponent.ios.js`. React Native tomara uno u otro dependiendo de la plataforma de que se trate:

En Android se trata del `ProgressBarAndroid`:

```js
export { ProgressBarAndroid as ProgressBarComponent } from "react-native";

export const progressProps = {
  styleAttr: "Horizontal",
  indeterminate: false
};
```

En IOS se trata de `ProgressBarComponent`:

```js
export { ProgressViewIOS as ProgressBarComponent } from "react-native";
export const progressProps = {};
```
