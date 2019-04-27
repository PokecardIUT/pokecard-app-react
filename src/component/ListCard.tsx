import * as React from "react";
import { Cards } from "../model/Card";
import { FlatList, StyleSheet, View, AsyncStorage } from "react-native";
import { CardCell } from "./CardCell";
import Storage, { StorageRenderFunctionProp } from "../feature/Storage";

interface MyProps {
  data: Cards[];
}

const KEY_FAVORITE_LIST = "FavoriteList";

export const ListCard = (props: MyProps) => {
  return (
    <Storage
      onChange={(favorites: string[]) => {
        AsyncStorage.setItem(KEY_FAVORITE_LIST, JSON.stringify(favorites)).then(
          () => {}
        );
      }}
    >
      {(storage: StorageRenderFunctionProp) => {
        storage.getFav();
        return (
          <View style={style.marginTop}>
            <FlatList
              onTouchStart={() => {}}
              data={props.data}
              renderItem={({ item }) => {
                return (
                  <CardCell
                    item={item}
                    isInFav={
                      storage.favorites.indexOf(item.id) !== -1 ? true : false
                    }
                    addItem={storage.addItem}
                  />
                );
              }}
              keyExtractor={item => item.id}
              numColumns={3}
            />
          </View>
        );
      }}
    </Storage>
  );
};

const style = StyleSheet.create({
  marginTop: {
    marginTop: 8
  }
});
