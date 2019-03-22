import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const HomePage = () => (
  <View>
    <Text>Bienvenu sur pokecard !</Text>
  </View>
)

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
