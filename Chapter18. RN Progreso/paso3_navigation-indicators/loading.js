import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

//loading tomo como argumento un componente y devuelve otro componente
//El componente que devuelve tiene que tener una propiedad en props que se llame promesa
//El componente renderiza un ActivityIndicator mientras que que se resuelve la promise, y cuando se resuelve la promise, el componente que se le paso
export default function loading(Wrapped) {
  return function LoadingWrapper(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      props.promesa.then(() => setLoading(false), () => setLoading(false));
    }, []);

    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return <Wrapped {...props} />;
    }
  };
}
