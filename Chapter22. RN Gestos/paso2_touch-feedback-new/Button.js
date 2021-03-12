import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, TouchableHighlight } from "react-native";
import styles from "./styles";

//Definimos un map (key - values)
const touchables = new Map([
  ["opacity", TouchableOpacity],
  ["highlight", TouchableHighlight],
  [undefined, TouchableOpacity]
]);

export default function Button({ label, onPress, touchable }) {
  //Obtenemos el tipo de boton que vamos a usar. Touchable será un componente
  const Touchable = touchables.get(touchable);
  //Indicamos las propiedades que vamos a pasar a nuestro control. El estilo y el handler
  const touchableProps = {
    style: styles.button,
    underlayColor: "rgba(112,128,144,0.3)",
    onPress
  };

  //Rederizamos nuestro control con las propiedades
  return (
    <Touchable {...touchableProps}>
      <Text style={styles.buttonText}> {label} </Text>
    </Touchable>
  );
}

//Interesante como definimos la propiedad touchable
Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  touchable: PropTypes.oneOf(["opacity", "highlight"])
};
