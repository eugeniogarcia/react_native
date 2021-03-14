import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "./styles";

const connectedMap = {
  none: "Disconnected",
  unknown: "Disconnected",
  wifi: "Connected",
  cell: "Connected",
  mobile: "Connected"
};

export default function App() {
  const [connected, setConnected] = useState("");

  //Cuando se construye el componente empezamos a monitorizar el estaod de la red.
  useEffect(() => {
    function onNetworkChange(connection) {
      setConnected(connectedMap[connection.type]);
    }

    //Usa la utilidad para monitorizar el estado de la red. Cuando cambia actualizaremos el estado de la App. Devuelve un lambda que nos permite eliminar la subscripción
    const unsubscribe = NetInfo.addEventListener(onNetworkChange);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>{connected}</Text>
    </View>
  );
}
