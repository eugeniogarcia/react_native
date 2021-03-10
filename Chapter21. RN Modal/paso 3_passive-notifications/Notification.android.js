import React from "react";
import PropTypes from "prop-types";
import { ToastAndroid } from "react-native";

export default function Notification({ message, duration }) {
  if (message) {
    //Usamos la api imperativa de Android
    ToastAndroid.show(message, duration);
  }

  //Retorna siempre null, es decir, este componente no pinta nada en la pantalla
  return null;
}

//La duración es obligatoria, y fijamos un valor por defecto
Notification.propTypes = {
  message: PropTypes.string,
  duration: PropTypes.number.isRequired
};

Notification.defaultProps = {
  duration: ToastAndroid.LONG
};
