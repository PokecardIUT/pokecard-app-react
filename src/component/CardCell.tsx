import * as React from "react";
import { Cards } from "../model/Card";
import { Image } from "react-native-elements";
import {
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback,
  AsyncStorage
} from "react-native";

interface MyProp {
  item: Cards;
}

const KEY_FAVORITE_LIST = "FavoriteList";

export const CardCell = (props: MyProp) => (
  <TouchableNativeFeedback onPress={() => addItem(props.item.id)}>
    <Image source={{ uri: props.item.imageUrl }} style={style.card} />
  </TouchableNativeFeedback>
);

const addItem = (id: string) => {
  AsyncStorage.getItem(KEY_FAVORITE_LIST)
    .then(test => {
      var cardListFavorite: string[] = [];
      if (test) {
        cardListFavorite = JSON.parse(test);
        console.log("cardListFav", cardListFavorite);
      }

      var finalList = [id];

      if (cardListFavorite.length > 0) {
        finalList = finalList.concat(cardListFavorite);
      }

      console.log(finalList);

      _storeData(KEY_FAVORITE_LIST, finalList);
    })
    .catch(error => {
      console.log(error);
    });
};

const _storeData = async (key: string, item: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    // Error saving data
  }
};

const style = StyleSheet.create({
  card: {
    resizeMode: "contain",
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 2.5,
    marginBottom: 8
  }
});
