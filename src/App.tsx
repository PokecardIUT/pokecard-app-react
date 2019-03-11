import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

// const HomePage = () => (
//   <View style={{ marginTop: 50 }}>
//     <Text>Hello Expo! Cocuou</Text>
//   </View>
// );

const HomePage = () => (
  <View style={{ marginTop: 50 }}>
    <Text>Hello Expo! Cocuou</Text>
  </View>
)

const Navigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: "List Deck",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
});

export default createAppContainer(Navigator);
