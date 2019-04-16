import { createStackNavigator, createAppContainer, NavigationScreenProp } from "react-navigation";
// import { SetsPage } from "./pages/SetsPage";
import { CardsPage } from "./pages/CardsPage";


export interface NavigationProps {
  navigation: NavigationScreenProp<any,any>
};

const Navigator = createStackNavigator({
  // SetsPage: {
  //   screen: SetsPage,
  //   navigationOptions: {
  //     title: "List de deck",
  //     headerStyle: {
  //       backgroundColor: "#056BB3"
  //     },
  //     headerTintColor: "#fff",
  //     headerTitleStyle: {
  //       fontWeight: "bold"
  //     }
  //   }
  // },
  CardsPage: {
    screen: CardsPage,
    navigationOptions: {
      title: "List de carte",
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
