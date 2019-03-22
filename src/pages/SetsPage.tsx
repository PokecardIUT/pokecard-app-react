import * as React from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  ToastAndroid
} from "react-native";
import Data from "../feature/Data";
import { EnumTypeModel } from "../model/EnumTypeModel";

const styles = StyleSheet.create({
  spinner: {
    alignItems: "center",
    justifyContent: "center"
  }
});

function showToastError(message: string) {
  ToastAndroid.show(message, ToastAndroid.LONG);
}

export const SetsPage = () => (
  <View>
    <Data path="sets" retourType={EnumTypeModel.Set}>
      {data => {
        // console.log(data);
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
        return <Text>List de deck</Text>;
      }}
    </Data>
  </View>
);
