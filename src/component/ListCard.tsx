import * as React from "react";
import { Cards } from "../model/Card";
import { FlatList } from "react-native";
import { CardCell } from "./CardCell";

interface MyProps {
  data: Cards[];
}

export const ListCard = (props: MyProps) => {
  console.log(props.data);
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => <CardCell item={item} />}
      keyExtractor={item => item.id}
    />
  );
};
