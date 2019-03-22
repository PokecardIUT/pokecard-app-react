import * as React from "react";
import { Sets } from "../model/Sets";

export type DataRenderFunctionProp = MyState

export type DataRenderFunction = (prop: DataRenderFunctionProp) => React.ReactNode

export interface DataProps {
    path: string
    children: DataRenderFunction
}

interface MyState {
    loading: boolean,
    data: Sets | null,
    error: boolean
}

class Data extends React.Component<DataProps ,MyState> {
  state = {
    loading: false,
    data: null,
    error: false
  };

  getData = () => {
    const baseUrl = "https://api.pokemontcg.io/v1/";
    const url = `${baseUrl}${this.props.path}`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
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
