import * as React from "react";
import { Cards } from "../model/Card";
import { FlatList, StyleSheet, View } from "react-native";
import { CardCell } from "./CardCell";

interface MyProps {
  data: Cards[];
}

export const ListCard = (props: MyProps) => {
  console.log(props.data);
  return (
    <View style={style.marginTop}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <CardCell item={item} />}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
};

const style = StyleSheet.create({
  marginTop: {
    marginTop: 8
  }
});
