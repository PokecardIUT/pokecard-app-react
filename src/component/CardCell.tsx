import * as React from "react";
import { Cards } from "../model/Card";
import { Image } from "react-native-elements";
import {
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback,
  View,
  ActivityIndicator
} from "react-native";

interface MyProp {
  item: Cards;
  isInFav: boolean;
  addItem: (id: string) => void;
}

const isFavorite = (isFav: boolean) => {
  if (isFav) {
    return <View style={{ ...style.favorite, backgroundColor: "red" }} />;
  } else {
    return <View style={{ ...style.favorite, backgroundColor: "gray" }} />;
  }
};

export const CardCell = (props: MyProp) => {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        props.addItem(props.item.id);
      }}
    >
      <View>
        <Image source={{ uri: props.item.imageUrl }} style={style.card} />
        {isFavorite(props.isInFav)}
      </View>
    </TouchableNativeFeedback>
  );
};

const style = StyleSheet.create({
  card: {
    resizeMode: "contain",
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 2.5,
    marginBottom: 8
  },
  favorite: {
    width: 20,
    height: 20,
    position: "absolute",
    bottom: 10,
    right: 10,
    borderRadius: 20
  }
});
