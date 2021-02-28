import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

//Define un StackNavigator con tres screens
//Cada Screen es un componente que tiene una prop promesa
export default createAppContainer(
  createStackNavigator(
    {
      First: {
        screen: props => (
          <First
            promesa={new Promise(resolve => setTimeout(resolve, 2000))}
            {...props}
          />
        )
      },
      Second: {
        screen: props => (
          <Second
            promesa={new Promise(resolve => setTimeout(resolve, 3000))}
            {...props}
          />
        )
      },
      Third: {
        screen: props => (
          <Third
            promesa={new Promise(resolve => setTimeout(resolve, 1000))}
            {...props}
          />
        )
      }
    },
    { initialRouteName: "First" }
  )
);
