import * as React from "react";
import { Text, View } from "react-native";
import { Card, Image } from "react-native-elements";
import { Sets } from "../model/Sets";

interface MyProps {
    data: Sets
}

export const SetCell = (props: MyProps) => (
    <Card>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: props.data.logoUrl }} style={{ resizeMode: 'contain', width: 150, height: 100 }} />
            <Text>{props.data.name}</Text>
            <Text>{props.data.series}</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ flex: 0.5 }}>{props.data.releaseDate}</Text>
                <Text style={{ flex: 0.5, textAlign: 'right' }}>{props.data.totalCards}</Text>
            </View>
        </View>
    </Card>
)