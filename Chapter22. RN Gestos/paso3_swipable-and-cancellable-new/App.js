import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import Swipeable from "./Swipeable";

export default function SwipableAndCancellable() {
  //Define el estado con una lista de items
  const [items, setItems] = useState(
    new Array(8).fill(null).map((v, id) => ({ id, name: "Swipe Me" }))
  );

  function onSwipe(id) {
    //Actualiza el estado, provocara el repintado del componente
    return () => {
      setItems(items.filter(item => item.id !== id));
    };
  }

  //El componente se pinta con los datos del estado. Al actualizar el estado se actualiza la lista de componentes que se muestra
  return (
    <View style={styles.container}>
      {items.map(item => (
        <Swipeable key={item.id} onSwipe={onSwipe(item.id)} name={item.name} />
      ))}
    </View>
  );
}
