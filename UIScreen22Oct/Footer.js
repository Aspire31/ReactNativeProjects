import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont();

export default class Footer extends React.PureComponent {
    render() {
        return (
            <View>
                <Text>
                    {'\n\n\n\n'}
                </Text>
                <FloatingAction
                    actions={actions}
                    color = "#ff7700"
                    distanceToEdge = {15,15}
                    overlayColor = "rgba(68, 68, 68, 0.0)"
                    position = 'right'
                    onPressItem={name => {
                        console.log(`selected button: ${name}`);
                        color:  "#ffffff"
                    }}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({

})

const actions = [
    {
        text: "Camera",
        icon: <Icon name="ios-camera" size = {30} color = "#ffffff"  />,
        name: "bt_Camera",
        color: "#ff7700",
        position: 'center',
        position: 1
    }
]