import { Platform, StyleSheet, StatusBar } from "react-native";

//Define el estilo del contenedor, en modo columna - flexDirection -, con una columna - flex
//Cada box se define que ocupe todo el espacion disponible - alingItems
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "space-around",
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
    })
  },

  box: {
    height: 100,
    justifyContent: "center",
    alignSelf: "stretch",
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
