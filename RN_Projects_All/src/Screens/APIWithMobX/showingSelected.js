import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, } from 'react-native';
import {Colors, vh, vw} from '../../Constants'
import {APIHitMobX} from '../../Store'

export default class showingSelected extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <FlatList
                    data={APIHitMobX.checkSelected.slice()}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={[Styles.container, styles.containerStyle]}>
                            <Image
                                source={{ uri: item.picture.thumbnail }}
                                style={styles.imageStyle}
                            />
                            <View style={{ flexDirection: 'column', marginLeft: vw(50), width: vw(250) }} >
                                <Text style={[Styles.text, { color: Colors.balanceText }]}> {item.name.title} {item.name.first} {item.name.last}</Text>
                                <Text style={[Styles.text, { color: Colors.balanceText }]}>{item.email} </Text>
                            </View>
                        </View>
                    )} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: Colors.paleOrange,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: vh(50),
    },
    imageStyle: {
        height: vh(70),
        width: vh(70),
        position: 'absolute',
        top: vh(-30),
        borderRadius: vh(20),

    },
    checkBoxView: {
        height: vh(20),
        width: vh(20)
    },
    imageCheckBox: {
        height: vh(16),
        width: vh(16),
        borderRadius: vh(8),
        borderWidth: 2,
        backgroundColor: Colors.leafyGreen
    },
    buttonstyle: {
        backgroundColor: Colors.verySoftRed,
        justifyContent: 'center',
        height: vh(40),
        width: vw(150),
        borderRadius: vh(15),
        padding: vh(5),
        alignItems: 'center',
        marginTop: vh(20),
        marginLeft: vh(210)
    },
    buttonTextStyle: {
        fontSize: 16,
        color: Colors.balanceText,
        fontWeight: 'bold'
    }
})
