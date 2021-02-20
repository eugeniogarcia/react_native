import { Platform, StyleSheet, StatusBar } from "react-native";

//Define el estilo del contenedor, en modo columna - flexDirection -, con una columna - flex
//Cada box se define con alineación central - alingItems
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "ghostwhite",
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
    })
  },

  box: {
    width: 300,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray"
  },

  boxText: {
    color: "darkslategray",
    fontWeight: "bold"
  }
});
