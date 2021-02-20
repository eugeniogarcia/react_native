import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

//Usamos navigation para poder ir a la página de Settings
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}
