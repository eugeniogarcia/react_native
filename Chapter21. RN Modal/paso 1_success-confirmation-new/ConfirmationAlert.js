import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-native";

export default function ConfirmationAlert(props) {
  if (props.visible) {
    //Api imperativa. Especificamos el título del dialogo, el mensaje, y un array con los botones
    Alert.alert(props.title, props.message, props.buttons);
  }

  return null;
}

ConfirmationAlert.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  buttons: PropTypes.array
};

ConfirmationAlert.defaultProps = {
  title: "",
  message: "",
  buttons: []
};
