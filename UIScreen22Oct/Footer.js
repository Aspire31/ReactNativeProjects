import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont();

export default class Footer extends React.PureComponent {
    render() {
        return (
            <View style={{ flexDirection: 'row' }} >
                <View style={styles.container} >
                    <TouchableOpacity>
                        <Text style = {styles.galleryText} > View Gallery </Text>
                    </TouchableOpacity>
                </View>


                <Text>
                    {'\n\n\n\n'}
                </Text>
                <FloatingAction
                    actions={actions}
                    color="#ff7700"
                    distanceToEdge={15, 15}
                    overlayColor="rgba(68, 68, 68, 0.0)"
                    position='right'
                    onPressItem={name => {
                        console.log(`selected button: ${name}`);
                    }}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 25,
        borderColor: 'lightgray',
        borderWidth: 0.5,
        borderRadius: 25,
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'lightgray',
        shadowOpacity: 1,
        shadowOffset: { height: 5, width: 5 },
        backgroundColor: 'white'
    },
    galleryText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff7700'
    }
})

const actions = [
    {
        icon: <Icon name="ios-camera" size={30} color="#ffffff" />,
        name: "bt_Camera",
        color: "#ff7700",
        position: 2
    },
    {
        icon: <Icon name="ios-filing" size={30} color="#ffffff" />,
        name: "bt_Upload",
        color: "#ff7700",
        position: 1
    }
]