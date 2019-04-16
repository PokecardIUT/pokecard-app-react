import * as React from "react";
import { Sets } from "../model/Sets";
import { Cards } from "../model/Card";
import { EnumTypeModel } from "../model/EnumTypeModel";

export type DataRenderFunctionProp = MyState;

export type DataRenderFunction = (
  prop: DataRenderFunctionProp
) => React.ReactNode;

export interface DataProps {
  retourType: string;
  path: string;
  children: DataRenderFunction;
}

interface MyState {
  loading: boolean;
  dataSets: Sets[] | null;
  dataCards: Cards[] | null;
  error: boolean;
}

class Data extends React.Component<DataProps, MyState> {
  state = {
    loading: false,
    dataSets: null,
    dataCards: null,
    error: false
  };

  getData = () => {
    const baseUrl = "https://api.pokemontcg.io/v1/";
    const url = `${baseUrl}${this.props.path}`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (this.props.retourType == EnumTypeModel.Card) {
          this.setState({ dataCards: data.cards });
        } else if (this.props.retourType == EnumTypeModel.Set) {
          this.setState({ dataCards: data.sets });
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
