import * as React from "react";
import { AsyncStorage } from "react-native";

class StorageTmp {
  KEY_FAVORITE_LIST = "FavoriteList";
  favoviteCard: string[] = [];

  public getData = () => {
    AsyncStorage.getItem(this.KEY_FAVORITE_LIST)
      .then(test => {
        var cardListFavorite: string[] = [];
        if (test) {
          cardListFavorite = JSON.parse(test);
        }

        this.favoviteCard = cardListFavorite;
      })
      .catch(error => {
        console.log(error);
      });
  };

  public addItem = (id: string) => {
    AsyncStorage.getItem(this.KEY_FAVORITE_LIST)
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

        this._storeData(this.KEY_FAVORITE_LIST, finalList);
        this.favoviteCard = finalList;
      })
      .catch(error => {
        console.log(error);
      });
  };

  _storeData = async (key: string, item: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
      // Error saving data
    }
  };
}

export default StorageTmp;
