import * as React from "react";
import { Sets } from "../model/Sets";
import { FlatList, View, TouchableOpacity } from "react-native";
import { SetCell } from "./SetCell";
import { NavigationProps } from "../App";
import { Icon } from "react-native-elements";

interface MyProps {
  data: Sets[];
  nav: NavigationProps;
}

export const ListSets = (props: MyProps) => {
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <SetCell data={item} nav={props.nav} />}
        keyExtractor={item => item.code}
      />
    </View>
  );
};
