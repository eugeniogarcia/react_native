import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, Modal, Text } from "react-native";
import styles from "./styles";

export default function Notification(props) {
  const [message, setMessage] = useState(props.message);

  //Este hook se utiliza cuando cambia el props.message
  useEffect(() => {
    //Si se informa un mensaje actualizamos el estado, para que se rendericen los hijos...
    if (!message) {
      setMessage(props.message);

      //... y tras un cierto tiempo volvemos a cambiar el estado
      const timer = setTimeout(() => {
        setMessage(null);
      }, props.duration);

      //Si salimos del componente nos aseguramos de parar cualquier temporizador que pudiera estar en funcionamiento
      return () => {
        clearTimeout(timer);
      };
    }
  }, [props.message]);

  //La ventana modal tiene una animación que hace que la ventana desaparezca al poco tiempo
  //La clave esta en que la propiedad visible es true cuando hay un mensaje especificado
  const modalProps = {
    animationType: "fade",
    transparent: true,
    visible: Boolean(message)
  };

  //La notificación se muestra como una ventana modal que desaparece al poco tiempo
  return (
    <Modal {...modalProps}>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationInner}>
          <Text>{message}</Text>
        </View>
      </View>
    </Modal>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
  duration: PropTypes.number.isRequired
};

Notification.defaultProps = {
  duration: 1500
};
