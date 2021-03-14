import React, { useState, useEffect } from "react";
import { Text, View, Switch } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "./styles";
import { set, get } from "./store";

const boolMap = {
  true: true,
  false: false
};

export default function App() {
  //Mensaje a mostrar en el componente indicando el estado de la conexión
  const [message, setMessage] = useState(null);
  
  //Estado con los datos de la app
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  //Helper para acceder al setter del estado
  const setters = new Map([
    ["first", setFirst],
    ["second", setSecond],
    ["third", setThird]
  ]);

  //Función que retorna un lambda.
  //El lambda toma un valor y lo guarda usando el metodo Set. El metodo Set retorna una Promise que se resuelve como true cuando hay conexión, y como false cuando no la hay y los datos se han guardado en el store local 
  function save(key) {
    return value => {
      set(key, value).then(
        connected => {
          //Actualiza el estado de datos
          setters.get(key)(value);
          //Actualiza el estado de la conexión
          setMessage(connected ? null : "Saved Offline");
        },
        err => {
          setMessage(err);
        }
      );
    };
  }

  useEffect(() => {
    NetInfo.fetch().then(() =>
      get().then(
        items => {
          for (let [key, value] of Object.entries(items)) {
            //Actualiza el estado de datos
            setters.get(key)(value);
          }
        },
        err => {
          setMessage(err);
        }
      )
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <View>
        <Text>First</Text>
        <Switch
          value={boolMap[first.toString()]}
          onValueChange={save("first")}
        />
      </View>
      <View>
        <Text>Second</Text>
        <Switch
          value={boolMap[second.toString()]}
          onValueChange={save("second")}
        />
      </View>
      <View>
        <Text>Third</Text>
        <Switch
          value={boolMap[third.toString()]}
          onValueChange={save("third")}
        />
      </View>
    </View>
  );
}
