import * as React from "react";
import { Sets } from "../model/Sets";
import { FlatList, StyleSheet, View } from "react-native";
import { SetCell } from "../component/SetCell";

interface MyState {
    listSearch: Sets[];
    showSpinner: boolean;
}

class ListDecks extends React.Component<{}, MyState> {
    public static API_URL_SETS = "https://api.pokemontcg.io/v1/sets";
    public codeSets: { id: string };

    constructor(props: any) {
        super(props);
        this.state = {
            listSearch: [],
            showSpinner: true
        };

        this.codeSets = {
            id: ""
        };
    }

    public componentDidMount() {
        this.getSets();
    }

    public render(): any {
        return (
            <View>
                <FlatList
                    data={this.state.listSearch}
                    renderItem={({ item }) => <SetCell data={item} />}
                    keyExtractor={(item) => item.code}
                />
            </View>

        )
    }

    private getSets(): void {
        fetch(ListDecks.API_URL_SETS)
            .then((res: any) => res.json())
            .then(data => {
                let listSetsByDate: any = data.sets.sort(
                    (o: any) => new Date(o.releaseDate)
                );
                listSetsByDate = listSetsByDate.reverse();
                this.setState({
                    listSearch: listSetsByDate,
                    showSpinner: false
                });
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default ListDecks;
