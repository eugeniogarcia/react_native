import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import Settings from "./Settings";

//Crea un stacknavigator con dos páginas, Home y Settings, y fija como página inicial Home
export default createAppContainer(
  createStackNavigator({ Home, Settings }, { initialRouteName: "Home" })
);
