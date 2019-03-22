import * as React from "react";
import { Cards } from "../model/Card";
import { Card, Image } from "react-native-elements";
import { Text } from "react-native";

interface MyProp {
  item: Cards;
}

export const CardCell = (props: MyProp) => (
  <Card>
    <Image
      source={{ uri: props.item.imageUrl }}
      style={{ resizeMode: "contain", width: 150, height: 200 }}
    />
  </Card>
);
