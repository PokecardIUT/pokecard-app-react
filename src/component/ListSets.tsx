import * as React from "react";
import { Sets } from "../model/Sets";
import { FlatList, View } from "react-native";
import { SetCell } from "./SetCell";

interface MyProps {
  data: Sets[];
}

export const ListSets = (props: MyProps) => {
  console.log("sets", props.data);
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <SetCell data={item} />}
        keyExtractor={item => item.code}
      />
    </View>
  );
};
