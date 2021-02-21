import React from "react";
import PropTypes from "prop-types";
import { Text, FlatList } from "react-native";
import styles from "./styles";
import ListControls from "./ListControls";

export default function List({ MiControl, data, onFilter, onSort, asc }) {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={<MiControl {...{ onFilter, onSort, asc }} />}
      renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
    />
  );
}

List.propTypes = {
  MiControl: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired
};

List.defaultProps = {
  MiControl: ListControls
};
