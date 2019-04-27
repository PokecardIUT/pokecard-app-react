import * as React from "react";
import { Sets } from "../model/Sets";
import { Cards } from "../model/Card";
import { EnumTypeModel } from "../model/EnumTypeModel";
import { AsyncStorage } from "react-native";

export type DataRenderFunctionProp = MyState;

export type DataRenderFunction = (
  prop: DataRenderFunctionProp
) => React.ReactNode;

export interface DataProps {
  retourType: string;
  path: string;
  isFavoris?: boolean;
  children: DataRenderFunction;
}

interface MyState {
  loading: boolean;
  dataSets: Sets[];
  dataCards: Cards[];
  error: boolean;
}

class Data extends React.Component<DataProps, MyState> {
  KEY_FAVORITE_LIST = "FavoriteList";

  state = {
    loading: false,
    dataSets: [],
    dataCards: [],
    error: false
  };

  getData = () => {
    if (this.props.isFavoris) {
      this.getFavoris();
    } else {
      this.getAllData();
    }
  };

  getFavoris = () => {
    AsyncStorage.getItem(this.KEY_FAVORITE_LIST, (errs, result) => {
      if (!errs) {
        if (result) {
          let listFavorisId: string[] = JSON.parse(result);
          listFavorisId.forEach(id => {
            const baseUrl = "https://api.pokemontcg.io/v1/";
            const url = `${baseUrl}cards/${id}`;
            this.setState({ loading: true });

            fetch(url)
              .then(res => res.json())
              .then(data => {
                this.setState(state => {
                  return { dataCards: [...state.dataCards, data.card] };
                });
              })
              .catch(() => {
                this.setState({ error: true });
              })
              .finally(() => {
                this.setState({ loading: false });
              });
          });
        }
      }
    });
  };

  getAllData = () => {
    const baseUrl = "https://api.pokemontcg.io/v1/";
    const url = `${baseUrl}${this.props.path}`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (this.props.retourType == EnumTypeModel.Card) {
          this.setState({ dataCards: data.cards });
        } else if (this.props.retourType == EnumTypeModel.Set) {
          this.setState({ dataSets: data.sets.reverse() });
        }
      })
      .catch(() => {
        this.setState({ error: true });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps: DataProps) {
    if (this.props.path !== prevProps.path) {
      this.getData();
    }
  }

  render() {
    return this.props.children(this.state);
  }
}

export default Data;
