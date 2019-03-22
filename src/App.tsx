import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Data from "./feature/Data";

const HomePage = () => (
  <View>
    <Data path="sets">
      {data => {
        console.log(data)
        return <Text>Bienvenu sur pokecard !</Text>;
      }}
    </Data>
  </View>
);

const Navigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: "Pokecard",
      headerStyle: {
        backgroundColor: "#056BB3"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
});

export default createAppContainer(Navigator);
