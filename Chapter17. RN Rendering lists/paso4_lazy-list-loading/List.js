import React from "react";
import PropTypes from "prop-types";
import { Text, FlatList } from "react-native";
import styles from "./styles";

export default function List({ data, obtieneDatos }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      onEndReached={obtieneDatos}
    />
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  obtieneDatos: PropTypes.func.isRequired
};
