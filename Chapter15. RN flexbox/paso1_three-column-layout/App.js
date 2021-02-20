import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function App() {
  //Tenemos un contenedor con tres elementos. El estilo de estas Views esta definido en styles
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>#1</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>#2</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>#3</Text>
      </View>
    </View>
  );
}
