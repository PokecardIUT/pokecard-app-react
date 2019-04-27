import * as React from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity
} from "react-native";
import Data from "../feature/Data";
import { EnumTypeModel } from "../model/EnumTypeModel";
import { ListSets } from "../component/ListSets";
import { NavigationProps } from "../App";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  spinner: {
    alignItems: "center",
    justifyContent: "center"
  },
  floatButton: {
    borderWidth: 1,
    borderColor: "#056BB3",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: "#056BB3",
    borderRadius: 100
  }
});

function showToastError(message: string) {
  ToastAndroid.show(message, ToastAndroid.LONG);
}

export const SetsPage = (props: NavigationProps) => (
  <View>
    <Data path="sets" retourType={EnumTypeModel.Set}>
      {data => {
        if (data.loading) {
          return (
            <View style={[styles.spinner]}>
              <ActivityIndicator
                style={[styles.spinner]}
                size={50}
                color="#056BB3"
              />
            </View>
          );
        }
        if (data.error) {
          {
            showToastError("Erreur lors du chargement des decks");
          }
        }
        return (
          <View>
            <ListSets data={data.dataSets ? data.dataSets : []} nav={props} />
            <TouchableOpacity
              style={styles.floatButton}
              onPress={() => props.navigation.navigate("FavoritePage")}
            >
              <Icon name="favorite" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        );
      }}
    </Data>
  </View>
);
