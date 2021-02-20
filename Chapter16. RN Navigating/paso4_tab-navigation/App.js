import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import Home from "./Home";
import News from "./News";
import Settings from "./Settings";

//Usamos 
const { createNavigator } = Platform.select({
  android: { createNavigator: createBottomTabNavigator },
  ios: { createNavigator: createDrawerNavigator }
});

export default createAppContainer(
  createNavigator({ Home, News, Settings }, { initialRouteName: "Home" })
);
