import React, { useState, useEffect } from "react";
import { View, Picker, FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import iconNames from "./icon-names.json";

export default function RenderingIcons() {
  //Estado. Tenemos un estado con las categorias, y otro con la lista de iconos en cada lista
  const [selected, setSelected] = useState("Web Application Icons");
  const [listSource, setListSource] = useState([]);
  //Carga una lista con las keys del json
  const categories = Object.keys(iconNames);

  //Funcion que actualiza el estado con la categoria seleccionada
  function updateListSource(selected) {
    //Guarda la lista de iconos de la categoria seleccionada
    setListSource(iconNames[selected]);
    //Categoría seleccionada
    setSelected(selected);
  }

  useEffect(() => {
    //Actualizamos el contenido del componente con la lista de iconos
    updateListSource(selected);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.picker}>
        <Picker selectedValue={selected} onValueChange={updateListSource}>
          {categories.map(category => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>
      <FlatList
        style={styles.icons}
        data={listSource.map((value, key) => ({ key: key.toString(), value }))}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Icon name={item.value} style={styles.itemIcon} />
            <Text style={styles.itemText}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}
