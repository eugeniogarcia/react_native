import React from "react";
import { PropTypes } from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";

//Define un componente helper para evitar tener que escribir tanto
export default function Box({ children }) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}

//Es obligatorio especificar los hijos
Box.propTypes = {
  children: PropTypes.node.isRequired
};
