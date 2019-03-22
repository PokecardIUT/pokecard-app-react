import * as React from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  ToastAndroid
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Data from "./feature/Data";
import ListDecks from "./feature/ListDeck";

const styles = StyleSheet.create({
  spinner: {
    alignItems: "center",
    justifyContent: "center"
  }
});

function showToastError(message: string) {
  ToastAndroid.show(message, ToastAndroid.LONG);

}

const HomePage = () => (
  <View>
    <Data path="sets">
      {data => {
        console.log(data);
        if (data.loading) {
          return (
            <View style={[styles.spinner]}>
              <ActivityIndicator
                style={[styles.spinner]}
                size={50}
                color="#056BB3"
              />
            </View>
          );
        }
        if (data.error) {
          {
            showToastError("Erreur lors du chargement des decks");
          }
        }
        return <Text>Cocuou</Text>;
      }}
    </Data>
  </View>
);

const Navigator = createStackNavigator({
  HomePage: {
    screen: ListDecks,
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
