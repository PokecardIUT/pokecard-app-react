import * as React from "react";
import { AsyncStorage } from "react-native";

export type StorageRenderFunctionProp = StorageRender;

export type StorageRenderFunction = (
  prop: StorageRenderFunctionProp
) => React.ReactNode;

export interface StorageProps {
  children: StorageRenderFunction;
  onChange: (favorites: Array<string>) => void;
}

interface StorageRender {
  favorites: string[];
  getData: () => string[];
  getFav: () => void;
  addItem: (id: string) => void;
}

interface MyState {
  favorites: string[];
}

class Storage extends React.Component<StorageProps, MyState> {
  KEY_FAVORITE_LIST = "FavoriteList";
  _isMounted = false;
  isGet = false;

  constructor(props: StorageProps) {
    super(props);
    this.state = {
      favorites: []
    };
  }

  getFavorite = () => {
    if (!this.isGet) {
      AsyncStorage.getItem(this.KEY_FAVORITE_LIST, (errs, result) => {
        if (!errs) {
          if (result) {
            if (this._isMounted) {
              this.setState({ favorites: JSON.parse(result) });
              this.isGet = true;
            }
          }
        }
      });
    }
  };

  getData = (): string[] => {
    return this.state.favorites;
  };

  addFavorite = (id: string) => {
    this.setState(
      state => {
        if (state.favorites.indexOf(id) === -1) {
          return { favorites: [...state.favorites, id] };
        }
      },
      () => this.props.onChange && this.props.onChange(this.state.favorites)
    );
  };

  removeFavorite = (id: string) => {
    this.setState(
      state => {
        if (state.favorites.indexOf(id) !== -1) {
          return {
            favorites: state.favorites.filter(favorite => favorite !== id)
          };
        }
      },
      () => this.props.onChange && this.props.onChange(this.state.favorites)
    );
  };

  addItem = (id: string) => {
    if (this.state.favorites.indexOf(id) === -1) {
      this.addFavorite(id);
    } else {
      this.removeFavorite(id);
    }
  };

  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const renderValue = {
      favorites: this.state.favorites,
      getData: this.getData,
      addItem: this.addItem,
      getFav: this.getFavorite
    };

    return this.props.children(renderValue);
  }
}

export default Storage;
