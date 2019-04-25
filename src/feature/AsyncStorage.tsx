import * as React from "react";
import { AsyncStorage } from "react-native";

export type StorageRenderFunctionProp = MyState;

export type StorageRenderFunction = (
  prop: StorageRenderFunctionProp
) => React.ReactNode;

export interface StorageProps {
  children: StorageRenderFunction;
}

interface MyState {
  favoviteCard: string[] | null;
}

class Storage extends React.Component<StorageProps, MyState> {
  KEY_FAVORITE_LIST = "FavoriteList";
  state = {
    favoviteCard: null
  };

  getData = () => {
    AsyncStorage.getItem(this.KEY_FAVORITE_LIST)
      .then(test => {
        var cardListFavorite: string[] = [];
        if (test) {
          cardListFavorite = JSON.parse(test);
        }

        this.setState({ favoviteCard: cardListFavorite });
      })
      .catch(error => {
        console.log(error);
      });
  };

  addItem = (id: string) => {
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
        this.setState({ favoviteCard: finalList });
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

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    this.getData();
  }

  render() {
    return this.props.children(this.state);
  }
}

export default Storage;
