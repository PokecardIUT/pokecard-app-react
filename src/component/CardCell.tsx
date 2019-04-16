import * as React from "react";
import { Cards } from "../model/Card";
import { Image } from "react-native-elements";
import { Dimensions, StyleSheet } from "react-native";

interface MyProp {
  item: Cards;
}

export const CardCell = (props: MyProp) => (
  <Image source={{ uri: props.item.imageUrl }} style={style.card} />
);

const style = StyleSheet.create({
  card: {
    resizeMode: "contain",
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 2.5,
    margin: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
