import * as React from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ToastAndroid
} from "react-native";
import Data from "../feature/Data";
import { ListCard } from "../component/ListCard";
import { EnumTypeModel } from "../model/EnumTypeModel";
import { NavigationProps } from "../App";

const styles = StyleSheet.create({
  spinner: {
    alignItems: "center",
    justifyContent: "center"
  }
});

function showToastError(message: string) {
  ToastAndroid.show(message, ToastAndroid.LONG);
}

export const FavoritePage = (props: NavigationProps) => {
  const idSet = props.navigation.getParam("idSet");
  const path = `cards?setCode=${idSet}`;
  return (
    <View>
      <Data path={path} retourType={EnumTypeModel.Card} isFavoris={true}>
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
            showToastError("Erreur lors du chargement des cards");
          }
          return <ListCard data={data.dataCards ? data.dataCards : []} />;
        }}
      </Data>
    </View>
  );
};
