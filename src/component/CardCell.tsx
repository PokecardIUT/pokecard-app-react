import * as React from "react";
import { Cards } from "../model/Card";
import { Image, Icon } from "react-native-elements";
import {
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback,
  View,
  Modal,
  TouchableOpacity
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

export class CardCell extends React.Component<MyProp, { showModal: boolean }> {
  constructor(props: MyProp) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  render() {
    return (
      <View>
        <TouchableNativeFeedback
          onPress={() => {
            this.props.addItem(this.props.item.id);
          }}
          onLongPress={() => {
            this.setState({ showModal: true });
          }}
        >
          <View>
            <Image
              source={{ uri: this.props.item.imageUrl }}
              style={style.card}
            />
            {isFavorite(this.props.isInFav)}
          </View>
        </TouchableNativeFeedback>

        <Modal
          visible={this.state.showModal}
          transparent={true}
          animationType={"fade"}
          onRequestClose={() => {
            this.setState({ showModal: false });
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.5)"
            }}
          >
            <Image
              source={{ uri: this.props.item.imageUrlHiRes }}
              style={style.cardModal}
            />
            <TouchableOpacity
              style={style.closeModal}
              onPress={() => this.setState({ showModal: false })}
            >
              <Icon name="clear" size={30} color="#000" />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

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
  },
  cardModal: {
    resizeMode: "contain",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  closeModal: {
    borderWidth: 1,
    borderColor: "#056BB3",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    position: "absolute",
    top: 35,
    right: 0,
    height: 50,
    backgroundColor: "#056BB3",
    borderRadius: 100
  }
});
